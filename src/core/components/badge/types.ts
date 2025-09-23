import type { CommonClasses, CommonParts, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';
import type { ReactNode } from 'react';

export interface BadgeClasses extends CommonClasses {
    variant?: string | undefined;
    anchorOriginVertical?: string | undefined;
    anchorOriginHorizontal?: string | undefined;
}

export interface BadgePart extends CommonParts {
    badgeContent?: string | undefined;
}

export type BadgeLabelProps = ComponentPropsWithCSSPropertiesWithoutRef<'span'> & { anchorOrigin?: BadgePosition };

export type BadgePosition = {
    vertical: 'top' | 'bottom' | 'center';
    horizontal: 'left' | 'right' | 'center';
};

export interface BadgeProps extends ComponentPropsWithCSSPropertiesWithoutRef<'span'> {
    variant?: 'solid' | 'outline';
    badgeContent?: ReactNode;
    anchorOrigin?: BadgePosition;
}
