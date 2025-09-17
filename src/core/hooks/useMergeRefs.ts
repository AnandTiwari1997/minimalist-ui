import React, { useCallback } from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

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
