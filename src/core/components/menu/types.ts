import type { ComponentPropsWithCSSPropertiesWithoutRef } from "@minimalist-ui/core/components";

export interface MenuItem extends ComponentPropsWithCSSPropertiesWithoutRef<'li'> {
    label?: string;
}

export interface MenuProps extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    items?: MenuItem[];
}