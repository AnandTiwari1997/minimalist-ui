import React, { type CSSProperties } from 'react';
import type { CommonClasses, CommonParts, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export interface CheckboxClasses extends CommonClasses {
    size?: string | undefined;
}

export interface CheckboxParts extends CommonParts {
    label?: string | undefined;
    checkbox?: string | undefined;
    checked?: string | undefined;
    indeterminate?: string | undefined;
}

export interface CheckboxState {
    checked?: boolean;
    unChecked?: boolean;
    indeterminate?: boolean;
}

export interface CheckboxProps extends Omit<ComponentPropsWithCSSPropertiesWithoutRef<'input'>, 'size'> {
    indeterminate?: boolean;
    label?: string;
    ariaLabel?: string;
    children?: React.ReactNode;
    css?: CSSProperties;
    size?: 'sm' | 'md' | 'lg';
    onUpdate?: (checkboxState: CheckboxState) => void;
}
