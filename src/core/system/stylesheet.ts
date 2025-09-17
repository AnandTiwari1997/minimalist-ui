import { hashString } from '@minimalist-ui/core';

let styleSheet: CSSStyleSheet;
type ResponsiveValue<T> = { [breakpoint: string]: T } | T;

export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export function isResponsive<T>(value: ResponsiveValue<T>): value is { [bp: string]: T } {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function camelToKebab(str: string): string {
    return str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
}

function getStyleSheet() {
    let styleEl = document.getElementById('dynamic-style') as HTMLStyleElement;
    if (!styleSheet) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-style';
        document.head.appendChild(styleEl);
        styleSheet = styleEl.sheet as CSSStyleSheet;
    }
    return styleSheet;
}

function toCSS(obj: Record<string, any>): string {
    return Object.entries(obj)
        .map(([k, v]) => `${camelToKebab(k)}: ${v};`)
        .join(' ');
}

const styleCache = new Map<string, string>();

export function createClass(
    rawCSS: Record<any, any>,
    rawPseudoCSS: Record<any, any>,
    rawMediaQueryCSS: Record<any, any>
) {
    const allStyles = { ...rawCSS, ...rawPseudoCSS, ...rawMediaQueryCSS };
    const styleString = JSON.stringify(allStyles);
    const hash = hashString(styleString);

    if (styleCache.has(hash)) {
        return styleCache.get(hash)!;
    }
    const sheet = getStyleSheet();

    const className = `class-${hash}`;

    // Handle normal selector
    const baseRule = `.${className} { ${toCSS(rawCSS)} }`;
    if (!isEmptyObject(rawCSS)) {
        insert(baseRule, sheet);
    }

    // Handle pseudo selectors (e.g. :hover, :focus, &:hover, &:focus)
    for (const [pseudoSel, value] of Object.entries(rawPseudoCSS)) {
        let pseudo = pseudoSel;
        if (pseudo.startsWith('&:')) {
            pseudo = pseudo.substring(1);
        }
        const rule = `.${className}${pseudo} { ${toCSS(value)} }`;

        insert(rule, sheet);
    }

    // Handle media queries (e.g. @media)
    for (const [mq, value] of Object.entries(rawMediaQueryCSS)) {
        const inner = `.${className} { ${toCSS(value)} }`;
        const rule = `${mq} { ${inner} }`;
        insert(rule, sheet);
    }

    styleCache.set(hash, className);
    return className;
}

function insert(rule: string, sheet: CSSStyleSheet) {
    const style = document.getElementById('dynamic-style');
    if (style) {
        style.textContent += ' ' + rule;
    } else {
        sheet.insertRule(rule, sheet.cssRules.length);
    }
}
