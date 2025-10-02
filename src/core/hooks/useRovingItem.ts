import React from 'react';
import { RovingContext } from '@minimalist-ui/core/components/primitive/rovingFocus/context';

export function useRovingItem(ref: React.RefObject<HTMLElement>) {
    const context = React.useContext(RovingContext);
    React.useEffect(() => {
        if (ref.current) {
            if (context) {
                context.registerItem(Math.random(), ref);
            }
        }
    }, []);

    return ref;
}