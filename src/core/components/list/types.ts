import type { ReactNode, RefObject } from 'react';
import type { CommonClasses, ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export type ListRole = 'listbox' | 'menu' | 'tablist' | 'tree' | 'list';
export type ListOrientation = 'horizontal' | 'vertical';

export interface ListClasses extends CommonClasses {
    orientation?: string | undefined;
}

export interface ListItemClasses extends CommonClasses {
    selected?: boolean | undefined;
    checked?: boolean | undefined;
    expanded?: boolean | undefined;
}

export interface ListProps extends ComponentPropsWithCSSPropertiesWithoutRef<'ul'> {
    children?: ReactNode;
    role?: ListRole;
    multiSelectable?: boolean;
    orientation?: ListOrientation;
    disabled?: boolean;
}

export interface ListItemProps extends ComponentPropsWithCSSPropertiesWithoutRef<'li'> {
    children?: ReactNode;
    index?: number;
    role?: string;
    hidden?: boolean;
    disabled?: boolean;
}

export interface ListContextValue {
    role: ListRole;
    registerItem: (id: string, ref: RefObject<HTMLLIElement | null>) => void;
    unregisterItem: (id: string) => void;
    items: RefObject<HTMLLIElement>[];
    activeId: string;
    setActiveId: (id: string) => void;
}
