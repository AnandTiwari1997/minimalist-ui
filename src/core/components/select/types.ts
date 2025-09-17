import type {
    CommonClasses,
    CommonParts,
    ComponentPropsWithCSSPropertiesWithoutRef,
    ListItemProps
} from '@minimalist-ui/core';
import React, { type CSSProperties, type ReactElement } from 'react';

export interface SelectClasses extends CommonClasses {}

export interface SelectParts extends CommonParts {
    trigger?: string | undefined;
    label?: string | undefined;
    icon?: string | undefined;
    options?: string | undefined;
    option?: string | undefined;
}

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends ComponentPropsWithCSSPropertiesWithoutRef<'select'> {
    children?: React.ReactNode;
    css?: CSSProperties;
    placeholder?: string;
    options?: SelectOption[];
    value?: string;
    defaultValue?: string;
}

export interface SelectListProps {
    children?: React.ReactNode;
    options: ReactElement<any>[];
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    listBoxId: string;
    labelledById: string;
    classes: Record<string, string>;
}

export interface SelectedItemProps extends ListItemProps {
    label?: any;
    value?: any;
    selected?: boolean;
}
