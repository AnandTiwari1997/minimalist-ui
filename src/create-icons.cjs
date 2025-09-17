// convert-icons.js

const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// --- Configuration ---
const SOURCE_DIR = '/Users/anandt1/Documents/own/minimalist-ui/src/core/icons/svgs_24_24';
const OUTPUT_DIR_BASE = '/Users/anandt1/Documents/own/minimalist-ui/src/core/icons';
const ICON_PREFIX = 'min'; // e.g., minCheckOutline

// --- Helper Functions ---

/**
 * Generates the TSX content for an icon component.
 * This version processes any SVG element and applies theme-friendly attributes.
 */
function createComponentFileContent(iconNamePascal, variant, viewBox, elements, $) {
    const iconObjectName = `${ICON_PREFIX}${iconNamePascal}${variant === 'solid' ? 'Solid' : 'Outline'}`;
    const componentName = `${iconNamePascal}Icon${variant === 'solid' ? 'Solid' : 'Outline'}`;
    const pathKey = variant; // 'solid' or 'outline'

    // Attributes to add to make the icon theme-able.
    const attrsToAdd =
        variant === 'outline'
            ? {
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round'
              }
            : {
                  fill: 'currentColor'
              };
    let finalElementsJSX;

    if (elements.length > 1) {
        // If there are multiple children, wrap them in a <g> tag.
        const $group = $('<g>');
        // Apply theme attributes to the group, which will be inherited by children.
        $group.attr(attrsToAdd);
        // Append the original, clean elements to the group.
        elements.forEach(($el) => {
            $group.append($el);
        });
        finalElementsJSX = $.html($group);
    } else if (elements.length === 1) {
        // If there is only one child, apply attributes directly to it.
        const $el = elements[0];
        $el.attr(attrsToAdd);
        finalElementsJSX = $.html($el);
    } else {
        // This case should not be hit due to checks in main(), but is here for safety.
        finalElementsJSX = '';
    }

    const template = `
import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon.ts';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';

export const ${iconObjectName} = createIcon({
    displayName: '${iconNamePascal}${variant === 'solid' ? 'Solid' : 'Outline'}',
    viewBox: '${viewBox}',
    paths: {
        ${pathKey}: (
            ${finalElementsJSX}
        )
    }
});

export const ${componentName} = (props: Omit<IconProps, 'icon'>) => <Icon icon={${iconObjectName}} {...props} />;
`;
    return template;
}

/**
 * Converts a kebab-case string to PascalCase.
 * e.g., "arrow-left" -> "ArrowLeft"
 */
function kebabToPascalCase(str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// --- Main Script Logic ---

async function main() {
    console.log('Starting SVG to component conversion...');

    if (!fs.existsSync(SOURCE_DIR)) {
        console.error(`Source directory not found: ${SOURCE_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(SOURCE_DIR).filter((file) => file.endsWith('.svg'));

    if (files.length === 0) {
        console.warn(`No SVG files found in ${SOURCE_DIR}.`);
        return;
    }

    const prettierConfig = await prettier.resolveConfig('/Users/anandt1/Documents/own/minimalist-ui');

    for (const file of files) {
        try {
            const filePath = path.join(SOURCE_DIR, file);
            const baseName = path.basename(file, '.svg');

            let variant;
            let iconNameKebab;

            if (baseName.endsWith('-filled')) {
                variant = 'solid';
                iconNameKebab = baseName.replace('-filled', '');
            } else if (baseName.endsWith('-outline')) {
                variant = 'outline';
                iconNameKebab = baseName.replace('-outline', '');
            } else {
                console.warn(`Skipping ${file}: Filename must end with '-filled.svg' or '-outline.svg'.`);
                continue;
            }

            const iconNamePascal = kebabToPascalCase(iconNameKebab);

            // Read and parse the SVG file
            const svgContent = fs.readFileSync(filePath, 'utf-8');
            const $ = cheerio.load(svgContent, { xml: { selfClosingTags: true } });

            const $svg = $('svg');
            const viewBox = $svg.attr('viewBox') || '0 0 24 24';

            // Find all direct children of the <svg> element. This is the most robust approach.
            const $elements = $svg.children();

            if ($elements.length === 0) {
                console.warn(`Skipping ${file}: No child elements found inside <svg> tag.`);
                continue;
            }

            const elements = $elements.toArray().map((el) => $(el));
            // Pass the cheerio instance '$' to allow for element manipulation
            const tsxContent = createComponentFileContent(iconNamePascal, variant, viewBox, elements, $);

            // Format the generated code
            const formattedContent = prettier.format(tsxContent, {
                ...prettierConfig,
                parser: 'typescript'
            });

            // Determine output path and write the file
            const outputDir = path.join(OUTPUT_DIR_BASE, `${variant}_new`);
            const outputFileName = `${iconNamePascal}Icon${variant === 'solid' ? 'Solid' : 'Outline'}.tsx`;
            const outputPath = path.join(outputDir, outputFileName);

            fs.mkdirSync(outputDir, { recursive: true });
            fs.writeFileSync(outputPath, await formattedContent);
            console.log(`✅ Created: ${outputPath}`);
        } catch (error) {
            console.error(`❌ Failed to process ${file}:`, error);
        }
    }

    console.log('\nConversion complete!');
}

main().then();
