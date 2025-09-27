import type { CSSProperties, ReactNode } from 'react';
import { useTheme } from '@minimalist-ui/core/theme';
import type { ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export type DismissEvents = 'esc' | 'outside-click' | 'timeout';

const theme = useTheme().theme;

export interface PositionUpdate {
    top: number;
    left: number;
    placement: AnchorPlacement;
}

export interface AnchorPlacement {
    placement: 'top' | 'bottom' | 'left' | 'right';
    anchor: 'start' | 'middle' | 'end';
}

export interface OverlayProps extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    css?: CSSProperties;
    token: keyof typeof theme.zIndex;
    anchor?: HTMLElement;
    anchorPlacement?: AnchorPlacement;
    children: ReactNode;
    dismissEvents?: DismissEvents[];
    onDismiss?: () => void;
    timeoutMs?: number;
    backdrop?: boolean;
    restoreFocus?: boolean;
    matchTriggerWidth?: boolean;
    operations?: ('flip' | 'shift' | 'arrow')[];
    offset?: number;
    allowFocusTrap?: boolean;
    onPositionUpdate?: (positionUpdate: PositionUpdate) => void;
}

export interface OverlayInstance {
    id: string;
    zIndex: number;
    dismissEvents: DismissEvents[];
    dismissHandler: () => void;
    element: HTMLElement;
    backdrop?: boolean;
}
