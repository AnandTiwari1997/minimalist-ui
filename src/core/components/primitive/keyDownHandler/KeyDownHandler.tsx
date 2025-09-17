import type { KeyboardEvent, ReactNode } from 'react';
import { useKeyDownHandler } from '@minimalist-ui/core/hooks/useKeyDownHandler.ts';

interface KeyDownHandlerProps {
    children: (api: {
        register: (key: string, handler: (e: KeyboardEvent) => void) => void;
        unregister: (key: string, handler?: (e: KeyboardEvent) => void) => void;
        keyboardProps: {
            tabIndex: number;
            onKeyDown: (e: KeyboardEvent) => void;
        };
    }) => ReactNode;
}

export function KeyDownHandler({ children }: KeyDownHandlerProps) {
    const { onKeyDown, register, unregister } = useKeyDownHandler();

    const keyboardProps = {
        tabIndex: 0,
        onKeyDown
    };

    return <>{children({ register, unregister, keyboardProps })}</>;
}
