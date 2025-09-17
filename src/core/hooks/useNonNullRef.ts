import { useRef } from 'react';

export function useNonNullRef<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const get = () => {
        if (!ref.current) throw new Error('Ref accessed before mount');
        return ref.current;
    };
    return [ref, get] as const;
}
