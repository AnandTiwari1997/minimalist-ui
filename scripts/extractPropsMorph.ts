#!/usr/bin/env ts-node
import { Project, SymbolFlags, Type } from 'ts-morph';
import fs from 'fs';
import path from 'path';

// ===== Config =====
const componentsDir = path.resolve('src/core');
const outputDir = path.resolve('src/props');

fs.mkdirSync(outputDir, { recursive: true });

// ===== Helper: recursively serialize a type =====
function serializeProp(type: Type, seenTypes = new Set<string>()): any {
    if (type.isArray()) {
        return [serializeProp(type.getArrayElementTypeOrThrow(), seenTypes)];
    }

    if (type.isUnion()) {
        return type.getUnionTypes().map((t) => serializeProp(t, seenTypes));
    }

    if (type.isIntersection()) {
        return type.getIntersectionTypes().map((t) => serializeProp(t, seenTypes));
    }

    const symbol = type.getSymbol();
    if (!symbol) {
        return type.getText();
    }

    const typeName = symbol.getName();
    if (seenTypes.has(typeName)) {
        return typeName; // prevent infinite recursion
    }
    seenTypes.add(typeName);

    // Expand object/interface types
    if (type.isObject() && !type.isArray() && !type.isTuple()) {
        const props: Record<string, any> = {};
        type.getProperties().forEach((prop) => {
            const decl = prop.getValueDeclaration() || prop.getDeclarations()[0];
            if (!decl) return;
            const propType = prop.getTypeAtLocation(decl);
            props[prop.getName()] = {
                type: serializeProp(propType, seenTypes),
                optional: prop.hasFlags(SymbolFlags.Optional)
            };
        });
        return props;
    }

    return type.getText();
}

// ===== Create ONE project =====
const project = new Project({
    tsConfigFilePath: 'tsconfig.json'
});

// ===== Extract interfaces from a source file =====
function extractInterfaces(filePath: string) {
    const source = project.addSourceFileAtPath(filePath);

    const generated: string[] = [];

    source.getInterfaces().forEach((iface) => {
        if (!iface.isExported()) return;

        const props: Record<string, any> = {};
        iface.getProperties().forEach((prop) => {
            if (prop.getName() === 'children' || prop.getName() === 'css') return;
            props[prop.getName()] = serializeProp(prop.getType(), new Set());
        });

        const outFile = path.join(outputDir, `${iface.getName()}.props.ts`);
        const content = `// Auto-generated file, do not edit.
export const ${iface.getName()}PropMetadata = ${JSON.stringify(props, null, 2)} as const;\n`;

        fs.writeFileSync(outFile, content, 'utf-8');
        console.log(`✅ Generated: ${outFile}`);
        generated.push(`${iface.getName()}.props`);
    });

    return generated;
}

// ===== Collect all .tsx component files =====
function getAllTypesFiles(dir: string): string[] {
    let results: string[] = [];
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getAllTypesFiles(fullPath));
        } else if (file === 'types.ts') {
            results.push(fullPath);
        }
    });
    return results;
}

// ===== Run extraction =====
let allExports: string[] = [];

// Extract from interfaces
getAllTypesFiles(componentsDir).forEach((file: string) => {
    allExports = allExports.concat(extractInterfaces(file));
});

// ===== Generate barrel file =====
const indexFileContent = allExports.map((f) => `export * from "./${f}";`).join('\n');
fs.writeFileSync(path.join(outputDir, 'index.ts'), `// Auto-generated barrel file\n${indexFileContent}\n`, 'utf-8');
console.log('✅ Generated props/index.ts');
