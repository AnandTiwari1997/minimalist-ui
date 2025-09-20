import { hashString } from '@minimalist-ui/core';

let styleSheet: CSSStyleSheet;
type ResponsiveValue<T> = { [breakpoint: string]: T } | T;

/**
 * Check if an object is empty.
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

/**
 * Check if a value is responsive (i.e., an object with breakpoint keys).
 * @template T - The type of the values in the object.
 * @param {ResponsiveValue<T>} value - The value to check.
 * @returns {value is { [bp: string]: T }} True if the value is responsive, false otherwise.
 */
export function isResponsive<T>(value: ResponsiveValue<T>): value is { [bp: string]: T } {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Convert a camelCase string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
function camelToKebab(str: string): string {
    return str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
}

/**
 * Get the stylesheet for dynamic styling.
 * @returns {CSSStyleSheet} The stylesheet.
 */
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

/**
 * Convert an object to a CSS string.
 * @param {Record<string, any>} obj - The object to convert.
 * @returns {string} The converted CSS string.
 */
function toCSS(obj: Record<string, any>): string {
    return Object.entries(obj)
        .map(([k, v]) => `${camelToKebab(k)}: ${v};`)
        .join(' ');
}

const styleCache = new Map<string, string>();

/**
 * Create a class with dynamic styling based on the provided CSS objects.
 * @param {Record<any, any>} rawCSS - The base CSS object.
 * @param {Record<any, any>} rawPseudoCSS - The pseudo-selector CSS object.
 * @param {Record<any, any>} rawMediaQueryCSS - The media query CSS object.
 * @returns {string} The generated class name.
 */
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

/**
 * Insert a CSS rule into the stylesheet.
 * @param {string} rule - The CSS rule to insert.
 * @param {CSSStyleSheet} sheet - The stylesheet to insert the rule into.
 */
function insert(rule: string, sheet: CSSStyleSheet) {
    const style = document.getElementById('dynamic-style');
    if (style) {
        style.textContent += ' ' + rule;
    } else {
        sheet.insertRule(rule, sheet.cssRules.length);
    }
}
