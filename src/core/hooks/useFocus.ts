import { type RefObject, useEffect, useState } from 'react';

/**
 * A React hook to track whether a DOM element is being focused.
 *
 * @param ref - A React ref object pointing to the DOM element to monitor.
 * @returns `true` if the element is being focused, `false` otherwise.
 *
 * @example
 * const MyComponent = () => {
 *   const focusRef = useRef(null);
 *   const isFocused = useFocus(focusRef);
 *
 *   return <div ref={focusRef}>{isFocused ? 'Focused' : 'Not Focused'}</div>;
 * }
 */
export const useFocus = <T extends HTMLElement = HTMLElement>(ref: RefObject<null | T>): boolean => {
    const [isFocused, setFocused] = useState<boolean>(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            const handleFocus = () => setFocused(true);
            const handleBlur = () => setFocused(false);

            node.addEventListener('focus', handleFocus);
            node.addEventListener('blur', handleBlur);

            return () => {
                node.removeEventListener('focus', handleFocus);
                node.removeEventListener('blur', handleBlur);
            };
        }
    }, [ref]);

    return isFocused;
};
