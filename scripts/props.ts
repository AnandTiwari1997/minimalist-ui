import { Project, SyntaxKind, Node } from 'ts-morph';
import path from 'path';
import fs from 'fs';

// Initialize project with tsconfig
const project = new Project({
    tsConfigFilePath: './tsconfig.json'
});

// ===== Config =====
const componentsDir = path.resolve('./src/core');
const outputDir = path.resolve('./src/props');
const SKIP_PROP = ['children', 'css'];

function extractProps(path: string, outFile: string, baseName: string) {
    const file = project.getSourceFileOrThrow(path);
    const components = file.getVariableDeclarations();

    const generated: string[] = [];

    components.map((component) => {
        const initializer = component.getInitializer();

        if (!initializer) return;

        // Only process forwardRef calls
        if (!Node.isCallExpression(initializer)) return;
        const callExpr = initializer;
        const callExprName = callExpr.getExpression().getText();
        if (callExprName !== 'forwardRef' && callExprName !== 'React.forwardRef') return;

        // Get props type
        const typeArgs = callExpr.getTypeArguments();
        if (typeArgs.length < 2) return;
        const propsType = typeArgs[1].getType();

        const props: Record<string, any> = {};
        propsType.getProperties().forEach((prop) => {
            if (SKIP_PROP.includes(prop.getName())) return;

            const decl = prop.getDeclarations()[0];
            const symbolType = prop.getTypeAtLocation(decl);
            const isOptional = prop.isOptional();

            // ✅ Extract JSDoc safely
            let description = '';
            if (Node.isPropertySignature(decl)) {
                description =
                    decl
                        .getJsDocs()
                        .map((doc: { getComment: () => any }) => doc.getComment())
                        .join('\n') || '';
            } else if (Node.isParameterDeclaration(decl)) {
                // fallback: extract leading comment text manually
                const commentRanges = decl.getLeadingCommentRanges();
                if (commentRanges.length) {
                    description = commentRanges
                        .map((c) =>
                            c
                                .getText()
                                .replace(/\/\*+|\*+\/|\/\//g, '')
                                .trim()
                        )
                        .join('\n');
                }
            }

            // ✅ detect default value in destructuring
            let defaultValue;
            const destructuring = file
                .getDescendantsOfKind(SyntaxKind.BindingElement)
                .find((b) => b.getName() === prop.getName());
            if (destructuring && destructuring.getInitializer()) {
                defaultValue = {
                    value: destructuring.getInitializer()!.getText()
                };
            }

            props[prop.getName()] = {
                required: !isOptional,
                type: { name: symbolType.getText() },
                description,
                ...(defaultValue ? { defaultValue } : {})
            };
        });

        const content = `// Auto-generated file, do not edit.
export const ${baseName}PropMetadata = ${JSON.stringify(
            {
                baseName,
                props
            },
            null,
            2
        )} as const;\n`;

        fs.writeFileSync(outFile, content, 'utf-8');
        console.log(`✅ Generated: ${outFile}`);
        generated.push(`${baseName}.props`);
    });
    return generated;
}

function getAllTSXFiles(dir: string) {
    let results: any[] = [];
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getAllTSXFiles(fullPath));
        } else if (file.endsWith('.tsx') && !file.endsWith('.test.tsx') && !file.endsWith('.spec.tsx')) {
            results.push(fullPath);
        }
    });
    return results;
}

let allProps: string[] = [];

getAllTSXFiles(componentsDir).forEach((componentPath) => {
    const baseName = path.basename(componentPath, '.tsx');
    const outFile = path.join(outputDir, `${baseName}.props.ts`);

    const exportFile = extractProps(componentPath, outFile, baseName);
    if (exportFile) {
        allProps = allProps.concat(exportFile);
    }
});

// ===== Generate barrel file =====
const indexFileContent = allProps.map((f) => `export * from "./${f}";`).join('\n');
fs.writeFileSync(path.join(outputDir, 'index.ts'), `// Auto-generated barrel file\n${indexFileContent}\n`, 'utf-8');
console.log('✅ Generated props/index.ts');
