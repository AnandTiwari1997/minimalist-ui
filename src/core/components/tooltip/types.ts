import type { AnchorPlacement, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export interface TooltipProps
    extends Omit<Omit<ComponentPropsWithCSSPropertiesWithoutRef<'div'>, 'position'>, 'content'> {
    children?: React.ReactNode;
    closeable?: boolean;
    content?: React.ReactNode;
    disabled?: boolean;
    hidden?: boolean;
    position?: AnchorPlacement;
}
