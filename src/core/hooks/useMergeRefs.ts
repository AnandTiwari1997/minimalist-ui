import React, { useCallback } from 'react';

/**
 * Represents a possible React ref, which can be either a RefObject or a callback function.
 * @template T - The type of the node that the ref can reference.
 */
type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * A custom React hook that merges multiple refs into a single callback.
 * @template T - The type of the node that the merged refs can reference.
 * @param {...PossibleRef<T>[]} refs - An array of possible refs to merge.
 * @returns {React.RefCallback<T>} - A single ref callback that sets the provided nodes for all input refs.
 */
export function useMergedRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
    return useCallback((node: T) => {
        refs.forEach((ref) => {
            if (!ref) {
                return;
            }
            if (typeof ref === 'function') {
                ref(node);
            } else {
                (ref as React.MutableRefObject<null | T>).current = node;
            }
        });
    }, refs);
}
