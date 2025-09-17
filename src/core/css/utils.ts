import { cssProperties, unitlessProperties } from '@minimalist-ui/core/css/properties';
import { type CSSUnit, cssUnits } from '@minimalist-ui/core/css/units';

export function getCSSUnit(value: string): CSSUnit | null {
    const unit = cssUnits.find((unit) => value.endsWith(unit));
    return unit ?? null;
}

export function getCSSValueNumber(value: string): null | number {
    const unit = getCSSUnit(value);
    if (!unit) {
        return null;
    }
    return parseFloat(value.replace(unit, ''));
}

export function hasCSSUnit(value: string): boolean {
    return cssUnits.some((unit) => value.endsWith(unit));
}

export function isUnitless(property: string): boolean {
    return unitlessProperties.has(property);
}

export function isValidCSSKey(key: string): boolean {
    return cssProperties.has(key);
}

export function toPx(digit: number) {
    return `${digit}px`;
}
