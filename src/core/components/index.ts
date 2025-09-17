import type { JSX } from 'react/jsx-runtime';

import React, { type CSSProperties } from 'react';

export * from '@minimalist-ui/core/components/button';
export * from '@minimalist-ui/core/components/checkbox';
export * from '@minimalist-ui/core/components/ripple';
export * from '@minimalist-ui/core/components/input';
export * from '@minimalist-ui/core/components/icon';
export * from '@minimalist-ui/core/components/iconButton';
export * from '@minimalist-ui/core/components/select';
export * from '@minimalist-ui/core/components/list';
export * from '@minimalist-ui/core/components/divider';
export * from '@minimalist-ui/core/components/primitive';

export type ComponentPropsWithCSSPropertiesWithoutRef<T extends keyof JSX.IntrinsicElements> = Partial<CSSProperties> &
    React.ComponentPropsWithoutRef<T>;

export type PropWithState<T> = { state?: State } & T;

export interface CommonParts {
    root?: string | undefined;
}

export type State = 'default' | 'active' | 'focused' | 'hidden' | 'hovered' | 'disabled' | 'error';

export enum StateEnum {
    DEFAULT = 'default',
    ACTIVE = 'active',
    FOCUSED = 'focused',
    HIDDEN = 'hidden',
    HOVERED = 'hovered',
    DISABLED = 'disabled',
    ERROR = 'error'
}

export interface CommonClasses {
    active?: boolean | undefined;
    focus?: boolean | undefined;
    hidden?: boolean | undefined;
    hover?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
}

export interface States {
    default?: boolean | undefined;
    active?: boolean | undefined;
    focused?: boolean | undefined;
    hidden?: boolean | undefined;
    hovered?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
}
