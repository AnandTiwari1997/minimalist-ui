// convert-icons.js

const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// --- Configuration ---
const SOLID_DIR = '/Users/anandt1/Documents/own/minimalist-ui/src/core/icons/solid';
const OUTPUT_DIR_BASE = '/Users/anandt1/Documents/own/minimalist-ui/src/core/icons';
const ICON_PREFIX = 'min'; // e.g., minCheckOutline

// --- Helper Functions ---

/**
 * Generates the TSX content for an icon component.
 * This version processes any SVG element and applies theme-friendly attributes.
 */
function createComponentFileContent(iconNamePascal, viewBox) {
    const iconObjectName = `${ICON_PREFIX}${iconNamePascal}`;
    const solid = `${iconObjectName}Solid.paths.solid`;
    const outline = `${iconObjectName}Outline.paths.outline`;
    const componentName = `${iconNamePascal}Icon`;

    const template = `
import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';
import { ${iconObjectName}Solid } from '@minimalist-ui/core/icons/solid/${iconNamePascal}IconSolid';
import { ${iconObjectName}Outline } from '@minimalist-ui/core/icons/outline/${iconNamePascal}IconOutline';

export const ${iconObjectName} = createIcon({
    displayName: '${iconNamePascal}',
    viewBox: '${viewBox}',
    paths: {
        solid: ${solid},
        outline: ${outline}
    }
});

export const ${componentName} = (props: Omit<IconProps, 'icon'>) => <Icon icon={${iconObjectName}} {...props} />;
`;
    return template;
}

// --- Main Script Logic ---

async function main() {
    console.log('Starting SVG to component conversion...');

    if (!fs.existsSync(SOLID_DIR)) {
        console.error(`Source directory not found: ${SOLID_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(SOLID_DIR).filter((file) => file !== 'index.tsx');

    if (files.length === 0) {
        console.warn(`No SVG files found in ${SOLID_DIR}.`);
        return;
    }

    const prettierConfig = await prettier.resolveConfig('/Users/anandt1/Documents/own/minimalist-ui');

    for (const file of files) {
        try {
            const filePath = path.join(SOLID_DIR, file);
            const baseName = path.basename(filePath, '.tsx');
            const iconNamePascal = baseName.replace('IconSolid', '');

            // Pass the cheerio instance '$' to allow for element manipulation
            const tsxContent = createComponentFileContent(iconNamePascal, '0 0 24 24');

            // Format the generated code
            const formattedContent = prettier.format(tsxContent, {
                ...prettierConfig,
                parser: 'typescript'
            });

            // Determine output path and write the file
            const outputFileName = `${iconNamePascal}Icon.tsx`;
            const outputPath = path.join(OUTPUT_DIR_BASE, outputFileName);

            fs.mkdirSync(OUTPUT_DIR_BASE, { recursive: true });
            fs.writeFileSync(outputPath, await formattedContent);
            console.log(`✅ Created: ${outputPath}`);
        } catch (error) {
            console.error(`❌ Failed to process ${file}:`, error);
        }
    }

    console.log('\nConversion complete!');
}

main().then();
