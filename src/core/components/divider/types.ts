import type { CommonClasses, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export interface DividerClasses extends CommonClasses {
    orientation?: 'horizontal' | 'vertical';
}

export interface DividerProp extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    dividerWidth?: number;
    orientation?: 'horizontal' | 'vertical';
}
