import { type RefObject } from 'react';

export function useRovingFocus<T extends HTMLElement>(itemRefs?: RefObject<T>[]) {
    const focusItem = (index: number) => {
        if (itemRefs && index < itemRefs!.length && itemRefs[index]) {
            itemRefs[index].current?.focus();
        }
    };

    return {
        focusItem
    };
}
