import { type RefObject } from 'react';

/**
 * A custom React hook that manages roving focus among a set of items.
 * @template T - The type of the HTMLElements that the ref objects will hold.
 * @param {RefObject<T>[]} itemRefs - An optional array of ref objects for the items to which roving focus should be applied.
 * @returns {{ focusItem: (index: number) => void }} An object containing a function to focus on an item at a specified index.
 */
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
