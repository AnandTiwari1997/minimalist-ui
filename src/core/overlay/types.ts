import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from '@minimalist-ui/core/theme';
import type { ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export type DismissEvents = 'esc' | 'outside-click' | 'timeout';

const theme = useTheme().theme;

export interface OverlayProps extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    css?: CSSProperties;
    token: keyof typeof theme.zIndex;
    anchor?: HTMLElement;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactNode;
    dismissEvents?: DismissEvents[];
    onDismiss?: () => void;
    timeoutMs?: number;
    backdrop?: boolean;
    restoreFocus?: boolean;
    matchTriggerWidth?: boolean;
}

export interface OverlayInstance {
    id: string;
    zIndex: number;
    dismissEvents: DismissEvents[];
    dismissHandler: () => void;
    element: HTMLElement;
    backdrop?: boolean;
}
