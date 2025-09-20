import { useCallback, type KeyboardEvent, useRef } from 'react';

/**
 * Represents a keydown event handler that takes a KeyboardEvent as an argument.
 */
type KeyHandler = (e: KeyboardEvent) => void;

/**
 * A custom React hook that provides functionality to handle keydown events and register/unregister handlers for specific keys.
 * @returns {{ onKeyDown: (e: KeyboardEvent) => void, register: (key: string, handler: KeyHandler) => void, unregister: (key: string) => void }} - An object containing the `onKeyDown` event handler and functions to register/unregister key handlers.
 */
export function useKeyDownHandler() {
    const handlersRef = useRef<Record<string, KeyHandler>>({});
    const register = useCallback((key: string, handler: KeyHandler) => {
        handlersRef.current[key] = handler;
    }, []);
    const unregister = useCallback((key: string) => {
        delete handlersRef.current[key];
    }, []);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        const handler = handlersRef.current[e.key];
        if (handler) handler(e);
    }, []);

    return { onKeyDown, register, unregister };
}
