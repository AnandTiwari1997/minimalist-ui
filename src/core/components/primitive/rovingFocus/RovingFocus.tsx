import React, { type ReactElement, isValidElement, cloneElement, useState, type RefObject, useCallback } from 'react';
import { useRovingFocus } from '@minimalist-ui/core/hooks/useRovingFocus';
import type { RovingFocusProps } from '@minimalist-ui/core/components/primitive/rovingFocus/types';
import { RovingContext } from '@minimalist-ui/core/components/primitive/rovingFocus/context';

export function RovingFocus({ children }: RovingFocusProps) {
    const [itemRefs, setItemRefs] = useState<{ [key: number]: RefObject<HTMLElement> }>({});

    const registerItem = useCallback((id: number, ref: RefObject<HTMLElement | null>) => {
        if (ref.current) {
            if (!itemRefs[id]) {
                setItemRefs((prev) => ({ ...prev, [id]: ref as RefObject<HTMLElement> }));
                return;
            }
        }
    }, []);

    const { focusItem } = useRovingFocus(Object.values(itemRefs));

    if (typeof children === 'function') {
        return (
            <>
                {children({
                    focusItem,
                    registerItem
                })}
            </>
        );
    }

    if (isValidElement(children)) {
        const childArray = React.Children.toArray(children) as ReactElement[];
        const enhanced = childArray.map((child) =>
            isValidElement(child) ? cloneElement(child as ReactElement<any>) : child
        );

        return (
            <RovingContext.Provider value={{ focusItem, registerItem }}>
                {enhanced.map((value) => (
                    <>{value}</>
                ))}
            </RovingContext.Provider>
        );
    }

    return null;
}
