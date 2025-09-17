import { type FC, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import type { OverlayProps } from '@minimalist-ui/core/overlay/types';
import { useFocusTrap } from '@minimalist-ui/core/hooks/useFocusTrap.ts';
import { usePosition } from '@minimalist-ui/core/overlay/usePosition';
import { useTheme } from '@minimalist-ui/core';
import ReactDOM from 'react-dom';
import { useInert } from '@minimalist-ui/core/overlay/useInert';
import { overlayManager } from '@minimalist-ui/core/overlay/overlayManager';
import { ensureBackdrop } from '@minimalist-ui/core/overlay/ensureBackdrop';

export const Overlay: FC<OverlayProps> = ({
    token,
    css,
    anchor,
    placement = 'bottom',
    children,
    dismissEvents = ['esc'],
    onDismiss,
    backdrop,
    restoreFocus,
    timeoutMs = 3000
}) => {
    const overlayRef = useRef<HTMLDivElement>(document.createElement('div'));
    const theme = useTheme().theme;
    const id = useId();

    const zIndex = theme.zIndex[token];
    const [ready, setReady] = useState(false);

    useInert(overlayRef, backdrop || false);
    useFocusTrap(overlayRef, backdrop || false);
    const { coords } = usePosition(
        overlayRef,
        anchor ?? null,
        {
            placement,
            offset: 0,
            strategy: ['flip', 'shift']
        },
        true
    );

    useLayoutEffect(() => {
        if (coords.top !== 0 || coords.left !== 0) {
            setReady(true);
        }
    }, [coords]);

    useEffect(() => {
        const overlayElement = overlayRef.current;
        Object.assign(overlayElement.style, css);
        overlayElement.style.top = ready ? `${coords.top}px` : '-9999px';
        overlayElement.style.left = ready ? `${coords.left}px` : '-9999px';
        overlayElement.style.visibility = ready ? 'visible' : 'hidden';
    }, [coords]);

    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null;
        ensureBackdrop();
        const overlayElement = overlayRef.current;
        const instance = {
            id: id,
            zIndex: zIndex,
            dismissEvents: dismissEvents,
            dismissHandler: onDismiss || (() => {}),
            element: overlayElement,
            backdrop: backdrop
        };
        overlayManager.register(instance);

        function handleOutsideClick(e: MouseEvent) {
            if (!backdrop && dismissEvents?.includes('outside-click') && !overlayElement.contains(e.target as Node))
                onDismiss?.();
        }

        let timer: ReturnType<typeof setTimeout> | null = null;
        if (dismissEvents?.includes('timeout')) {
            timer = setTimeout(() => onDismiss?.(), timeoutMs);
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            if (timer) clearTimeout(timer);
            overlayManager.unregister(instance);
            if (restoreFocus !== false && previouslyFocused) {
                previouslyFocused.focus();
            }
        };
    }, [anchor, placement, zIndex, onDismiss, timeoutMs, token]);

    return ReactDOM.createPortal(children, overlayRef.current);
};
