import type { CommonClasses, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';
import type { IconDefinition } from '@minimalist-ui/core/icons/utils/types';

export type IconName = 'home' | 'search' | 'settings' | 'user' | 'check' | 'close' | 'alert' | 'info' | 'loader';

export type IconVariant = 'outline' | 'solid';

export type IconSizeToken = 'sm' | 'md' | 'lg' | 'xl';

export interface IconClasses extends CommonClasses {
    size?: string | undefined;
    variant?: string | undefined;
}

export interface IconProps extends ComponentPropsWithCSSPropertiesWithoutRef<'svg'> {
    icon?: IconDefinition;
    name?: string;
    variant?: IconVariant;
    size?: IconSizeToken;
    strokeWidth?: number;
    'aria-label'?: string;
    hidden?: boolean;
    disabled?: boolean;
}
