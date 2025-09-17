import type { Theme } from '@minimalist-ui/core/theme/types';

import { type Breakpoint, breakpoints } from '@minimalist-ui/core/theme/tokens';

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
