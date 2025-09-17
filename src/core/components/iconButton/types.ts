import type { ButtonProps, IconProps } from '@minimalist-ui/core';

export interface IconButtonProps extends Omit<ButtonProps, 'icon'> {
    icon: IconProps;
}
