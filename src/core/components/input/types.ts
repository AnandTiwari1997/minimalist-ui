import type {
    CommonClasses,
    CommonParts,
    ComponentPropsWithCSSPropertiesWithoutRef,
    IconDefinition
} from '@minimalist-ui/core';

import React, { type CSSProperties } from 'react';

export interface InputClasses extends CommonClasses {
    size?: string | undefined;
    variant?: string | undefined;
}

export interface InputParts extends CommonParts {
    leadingIcon?: string | undefined;
    trailingIcon?: string | undefined;
    label?: string | undefined;
    field?: string | undefined;
    helperText?: string | undefined;
    placeholder?: string | undefined;
}

export interface InputProps extends Omit<ComponentPropsWithCSSPropertiesWithoutRef<'input'>, 'size'> {
    ariaLabel?: string;
    children?: React.ReactNode;
    css?: CSSProperties;
    label?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    iconPlacement?: 'leading' | 'trailing';
    icon?: string | IconDefinition | React.ReactElement<{}, 'svg'>;
    helperText?: string;
    errorText?: string;
    onValidate?: (value: string) => string;
}
