const fs = require('fs');
const path = require('path');
const { withDefaultConfig } = require('react-docgen-typescript');

const parser = withDefaultConfig({
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true
});

const componentsDir = path.resolve('src/core');
const outputDir = path.resolve('src/props');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function extractProps(componentPath, outFile) {
    try {
        const docs = parser.parse(componentPath);

        if (docs.length === 0) {
            console.warn(`⚠️ No props found in ${componentPath}`);
            return null;
        }

        const component = docs[0];
        const tsExport = `// Auto-generated file, do not edit.
export const ${component.displayName}Metadata = ${JSON.stringify(component.props, null, 2)} as const;
`;

        fs.writeFileSync(outFile, tsExport, 'utf-8');
        console.log(`✅ Generated: ${outFile}`);
        return `${component.displayName}.props`;
    } catch (err) {
        console.error(`❌ Failed to process ${componentPath}:`, err);
        return null;
    }
}

function getAllTSXFiles(dir) {
    let results = [];
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

const allProps = [];

getAllTSXFiles(componentsDir).forEach((componentPath) => {
    const baseName = path.basename(componentPath, '.tsx');
    const outFile = path.join(outputDir, `${baseName}.props.ts`);

    const exportFile = extractProps(componentPath, outFile);
    if (exportFile) {
        allProps.push(exportFile);
    }
});

// Generate barrel file
const indexFileContent = allProps.map((e) => `export * from "./${e}";`).join('\n');
fs.writeFileSync(path.join(outputDir, 'index.ts'), `// Auto-generated barrel file\n${indexFileContent}\n`, 'utf-8');
console.log('✅ Generated props/index.ts');
