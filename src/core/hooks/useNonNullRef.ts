import { useRef } from 'react';

/**
 * A custom React hook that returns a ref object and a getter function for accessing the current value of the ref.
 * The getter function throws an error if the ref is accessed before it's mounted, ensuring non-null values.
 * @template T - The type of the HTMLElement that the ref will hold.
 * @returns {[React.RefObject<T | null>, () => T]} An array containing the ref object and a getter function for accessing its current value.
 */
export function useNonNullRef<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const get = () => {
        if (!ref.current) throw new Error('Ref accessed before mount');
        return ref.current;
    };
    return [ref, get] as const;
}
