import type { CSSProperties } from 'react';

import { isUnitless, isValidCSSKey, type Theme } from '@minimalist-ui/core';
import { isResponsive } from '@minimalist-ui/core/system/stylesheet';

/**
 * Mapping of shorthand CSS properties to their full names.
 */
export const CSSPropertiesShort: Record<string, keyof CSSProperties> = {
    align: 'alignItems',
    b: 'bottom',
    // Colors
    bg: 'backgroundColor',
    borderC: 'borderColor',
    // Border Radius
    br: 'borderRadius',
    brbl: 'borderBottomLeftRadius',
    brbr: 'borderBottomRightRadius',

    brtl: 'borderTopLeftRadius',
    brtr: 'borderTopRightRadius',
    c: 'color',
    // Flexbox
    d: 'display',
    ff: 'fontFamily',
    flexBasis: 'flexBasis',
    flexDir: 'flexDirection',

    flexGrow: 'flexGrow',
    flexShrink: 'flexShrink',
    flexWrap: 'flexWrap',
    // Typography
    fs: 'fontSize',
    fw: 'fontWeight',

    gap: 'gap',
    h: 'height',
    justify: 'justifyContent',
    l: 'left',
    lh: 'lineHeight',
    // Margin
    m: 'margin',

    maxH: 'maxHeight',
    maxW: 'maxWidth',
    mb: 'marginBottom',
    minH: 'minHeight',
    minW: 'minWidth',
    ml: 'marginLeft',
    mr: 'marginRight',
    mt: 'marginTop',
    mx: 'marginInline', // horizontal (left/right)

    my: 'marginBlock', // vertical (top/bottom)
    // Padding
    p: 'padding',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    // Positioning
    pos: 'position',

    pr: 'paddingRight',
    pt: 'paddingTop',
    px: 'paddingInline', // left/right

    py: 'paddingBlock', // top/bottom
    r: 'right',
    t: 'top',
    ta: 'textAlign',
    // Width / Height
    w: 'width'
};

/**
 * Expand a shorthand CSS property into its full form.
 * @param {string} key - The shorthand CSS property.
 * @param {keyof CSSProperties} cssKey - The full CSS property name.
 * @param {any} value - The value of the CSS property.
 * @returns {Record<string, any>} An object containing the expanded CSS properties and their values.
 */
export function expandShorthand(key: string, cssKey: keyof CSSProperties, value: any) {
    if (key === 'px') {
        return { paddingLeft: validateUnit('paddingLeft', value), paddingRight: validateUnit('paddingRight', value) };
    }
    if (key === 'py') {
        return { paddingBottom: validateUnit('paddingBottom', value), paddingTop: validateUnit('paddingTop', value) };
    }
    if (key === 'mx') {
        return { marginLeft: validateUnit('marginLeft', value), marginRight: validateUnit('marginRight', value) };
    }
    if (key === 'my') {
        return { marginBottom: validateUnit('marginBottom', value), marginTop: validateUnit('marginTop', value) };
    }
    return { [cssKey]: validateUnit(cssKey, value) };
}

/**
 * Resolve a CSS property value based on the theme.
 * @param {string} key - The CSS property name.
 * @param {any} value - The CSS property value.
 * @param {Theme} theme - The current theme object.
 * @returns {any} The resolved CSS property value.
 */
export function resolveValue(key: string, value: any, theme: Theme): any {
    if (value === null) {
        return value;
    }

    if (
        ['m', 'mb', 'ml', 'mr', 'mt', 'mx', 'my', 'p', 'pb', 'pl', 'pr', 'pt', 'px', 'py'].includes(key) ||
        [
            'margin',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'marginTop',
            'padding',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'paddingTop'
        ].includes(key)
    ) {
        return theme.spacing?.[value as keyof typeof theme.spacing] ?? value;
    }

    if (['bg', 'c'].includes(key) || ['background', 'color'].includes(key)) {
        return theme.color?.[value as keyof (typeof theme)['color']] ?? value;
    }

    if (['fs'].includes(key) || ['fontSize'].includes(key)) {
        return theme.font?.size?.[value as keyof typeof theme.font.size] ?? value;
    }

    if (['br'].includes(key) || ['borderRadius'].includes(key)) {
        return theme.radius?.[value as keyof typeof theme.radius] ?? value;
    }

    return value;
}

/**
 * Split props into styleProps and domProps based on the theme.
 * @param {T extends Record<string, any>} props - The props object to split.
 * @param {Theme} theme - The current theme object.
 * @returns {{ domProps: Record<string, any>, styleProps: Record<string, any> }} An object containing the split props.
 */
export function splitProps<T extends Record<string, any>>(props: T, theme: Theme) {
    const styleProps: Record<string, any> = {};
    const domProps: Record<string, any> = {};

    for (const key in props) {
        if (key in CSSPropertiesShort) {
            const cssKey = CSSPropertiesShort[key];
            const value = props[key];

            if (isResponsive(value)) {
                const responsiveStyles: Record<string, any> = {};
                for (const bp in value) {
                    const resolved = resolveValue(key, value[bp], theme);
                    responsiveStyles[`@${bp}`] = expandShorthand(key, cssKey, resolved);
                }
                Object.assign(styleProps, responsiveStyles);
            } else {
                const resolved = resolveValue(key, value, theme);
                Object.assign(styleProps, expandShorthand(key, cssKey, resolved));
            }
        } else if (isValidCSSKey(key)) {
            const resolved = resolveValue(key, props[key], theme);
            styleProps[key] = validateUnit(key, resolved);
        } else {
            domProps[key] = props[key];
        }
    }

    return { domProps, styleProps };
}

/**
 * Validate a CSS property value and append 'px' if necessary.
 * @param {string} property - The CSS property name.
 * @param {number | string} value - The CSS property value.
 * @returns {number | string} The validated CSS property value.
 */
function validateUnit(property: string, value: number | string) {
    if (isUnitless(property)) {
        return value;
    }
    const parsedValue = parseFloat(value.toString());
    return isNaN(parsedValue) ? value : `${parsedValue}px`;
}

/**
 * Hash a string to a short and safe hash value.
 * @param {string} str - The input string to hash.
 * @returns {string} The hashed string.
 */
export function hashString(str: string): string {
    let hash = 0,
        i,
        chr;
    if (str.length === 0) return '0';
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return 'h' + Math.abs(hash).toString(36); // short & safe
}
