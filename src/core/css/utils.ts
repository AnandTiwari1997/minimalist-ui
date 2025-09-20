import { cssProperties, unitlessProperties } from "@minimalist-ui/core/css/properties";
import { cssUnits, type CSSUnit } from "@minimalist-ui/core/css/units";

/**
 * Retrieves the CSS unit from a given value string, if it exists.
 * @param {string} value - The input value string.
 * @returns {CSSUnit | null} The CSS unit found in the value string, or null if no unit is found.
 */
export function getCSSUnit(value: string): CSSUnit | null {
    const unit = cssUnits.find((unit) => value.endsWith(unit));
    return unit ?? null;
}

/**
 * Extracts the numeric value from a given CSS value string, if it has a valid CSS unit.
 * @param {string} value - The input CSS value string.
 * @returns {null | number} The extracted numeric value, or null if no valid CSS unit is found in the value string.
 */
export function getCSSValueNumber(value: string): null | number {
    const unit = getCSSUnit(value);
    if (!unit) {
        return null;
    }
    return parseFloat(value.replace(unit, ''));
}

/**
 * Checks if a given value string has a valid CSS unit.
 * @param {string} value - The input value string to check for a CSS unit.
 * @returns {boolean} True if the value string ends with a valid CSS unit; otherwise, false.
 */
export function hasCSSUnit(value: string): boolean {
    return cssUnits.some((unit) => value.endsWith(unit));
}

/**
 * Checks if a given CSS property is unitless.
 * @param {string} property - The input CSS property to check for unitlessness.
 * @returns {boolean} True if the property is unitless; otherwise, false.
 */
export function isUnitless(property: string): boolean {
    return unitlessProperties.has(property);
}

/**
 * Checks if a given key is a valid CSS property.
 * @param {string} key - The input key to check for validity as a CSS property.
 * @returns {boolean} True if the key is a valid CSS property; otherwise, false.
 */
export function isValidCSSKey(key: string): boolean {
    return cssProperties.has(key);
}

/**
 * Converts a digit to a pixel value as a string with 'px' unit.
 * @param {number} digit - The input digit to convert to pixels.
 * @returns {string} The equivalent pixel value as a string with 'px' unit.
 */
export function toPx(digit: number) {
    return `${digit}px`;
}

/**
 * Converts a pixel value to rem units based on the root font size.
 * @param {number} digit - The pixel value to convert.
 * @returns {string} The equivalent rem value as a string with 'rem' unit.
 */
export function toRem(digit: number): string {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return `${digit / rootFontSize}rem`;
}
