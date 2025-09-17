import React, { createContext, useContext } from 'react';
import { useKeyDownHandler } from '@minimalist-ui/core/hooks/useKeyDownHandler.ts';

const KeyDownHandlerContext = createContext<ReturnType<typeof useKeyDownHandler> | null>(null);

export function KeyDownHandlerProvider({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    const api = useKeyDownHandler();

    return (
        <div tabIndex={0} onKeyDown={api.onKeyDown} {...rest}>
            <KeyDownHandlerContext.Provider value={api}>{children}</KeyDownHandlerContext.Provider>
        </div>
    );
}

export function useKeyRegistration(key: string, handler: (e: React.KeyboardEvent) => void) {
    const ctx = useContext(KeyDownHandlerContext);
    if (!ctx) throw new Error('useKeyRegistration must be inside provider');

    React.useEffect(() => {
        ctx.register(key, handler);
        return () => ctx.unregister(key);
    }, [ctx, key, handler]);
}
