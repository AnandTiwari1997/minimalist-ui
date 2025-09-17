import { useCallback, type KeyboardEvent, useRef } from 'react';

type KeyHandler = (e: KeyboardEvent) => void;

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
