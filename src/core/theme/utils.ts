import type { Theme } from '@minimalist-ui/core/theme/types';

import { type Breakpoint, breakpoints } from '@minimalist-ui/core/theme/tokens';

/**
 * Injects CSS variables into the document based on a given theme and options.
 * @param {Object} theme - The theme object containing the styles to be injected.
 * @param {Object} [options] - Optional configuration for the CSS injection.
 * @param {string} [options.id='ds-theme'] - The ID of the style tag that will hold the CSS variables.
 * @param {string} [options.prefix='ds'] - The prefix to be used for the CSS variable names.
 * @param {string} [options.selector=':root'] - The CSS selector where the CSS variables will be injected.
 */
export function injectCssVariables(theme: Theme, options: { id?: string; prefix?: string; selector?: string } = {}) {
    const { id = 'ds-theme', prefix = 'ds', selector = ':root' } = options;
    const css = `${selector} { ${createCssVariables(theme, prefix)} }`;

    let styleTag = document.getElementById(id) as HTMLStyleElement | null;
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = id;
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = css;
}

/**
 * Transforms a styles object into a responsive version by wrapping breakpoint-specific styles in media queries.
 * @template T - The type of the input and output styles objects.
 * @param {T} styles - The styles object to be transformed.
 * @returns {T} A new styles object with breakpoint-specific styles wrapped in media queries.
 */
export function responsive<T extends Record<string, any>>(styles: T): T {
    const rules: any = {};
    for (const key in styles) {
        if (breakpoints[key as Breakpoint]) {
            rules[`@media (min-width: ${breakpoints[key as Breakpoint]})`] = styles[key];
        } else {
            rules[key] = styles[key];
        }
    }
    return rules;
}

/**
 * Creates a string of CSS variables based on a given theme and prefix.
 * @param {Object} theme - The theme object containing the styles to be transformed into CSS variables.
 * @param {string} [prefix='ds'] - The prefix to be used for the CSS variable names.
 * @returns {string} A string of CSS variables based on the input theme and prefix.
 */
function createCssVariables(theme: Theme, prefix = 'ds'): string {
    const vars: string[] = [];

    function walk(obj: Theme, path: string[]) {
        for (const key in obj) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const value = obj[key];
            const newPath = [...path, key];
            if (typeof value === 'object') {
                walk(value, newPath);
            } else {
                const cssVar = `--${prefix}-${newPath.join('-')}`;
                vars.push(`${cssVar}: ${value};`);
            }
        }
    }

    walk(theme, []);
    return vars.join(' ');
}
