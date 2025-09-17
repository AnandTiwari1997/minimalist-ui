import { createContext, useContext } from 'react';
import type { RovingContextValue } from '@minimalist-ui/core/components/primitive/rovingFocus/types.ts';

export const RovingContext = createContext<RovingContextValue | null>(null);

export const useRovingContext = () => {
    const ctx = useContext(RovingContext);
    if (!ctx)
        throw new Error(
            'useRovingContext must be used within a <RovingFocus> provider. If you are using the render prop pattern, the necessary functions are passed as arguments, and this hook is not needed.'
        );
    return ctx;
};
