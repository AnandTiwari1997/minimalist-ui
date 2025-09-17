import type {
    CommonClasses,
    CommonParts,
    ComponentPropsWithCSSPropertiesWithoutRef,
    IconDefinition
} from '@minimalist-ui/core';

import React, { type CSSProperties } from 'react';

export interface ButtonClasses extends CommonClasses {
    size?: string | undefined;
    variant?: string | undefined;
}

export interface ButtonParts extends CommonParts {
    leadingIcon?: string | undefined;
    trailingIcon?: string | undefined;
    content?: string | undefined;
}

export interface ButtonProps extends ComponentPropsWithCSSPropertiesWithoutRef<'button'> {
    ariaLabel?: string;
    children?: React.ReactNode;
    css?: CSSProperties;
    icon?: string | IconDefinition | React.ReactElement<{}, 'svg'>;
    iconPlacement?: 'leading' | 'trailing';
    label?: string;
    size?: 'lg' | 'md' | 'sm';
    variant?: 'ghost' | 'outline' | 'primary' | 'flat';
    allowClickEffect?: boolean;
}
