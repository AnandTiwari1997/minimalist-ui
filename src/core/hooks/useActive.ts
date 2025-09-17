import { type RefObject, useEffect, useState } from 'react';

/**
 * A React hook to track whether a DOM element is being active.
 *
 * @param ref - A React ref object pointing to the DOM element to monitor.
 * @returns `true` if the element is being active, `false` otherwise.
 *
 * @example
 * const MyComponent = () => {
 *   const activeRef = useRef(null);
 *   const isActive = useActive(activeRef);
 *
 *   return <div ref={activeRef}>{isActive ? 'Active' : 'Not Active'}</div>;
 * }
 */
export const useActive = <T extends HTMLElement = HTMLElement>(ref: RefObject<null | T>): boolean => {
    const [isActive, setActive] = useState<boolean>(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            const handleMouseDown = () => setActive(true);
            const handleMouseUp = () => setActive(false);

            node.addEventListener('mousedown', handleMouseDown);
            node.addEventListener('mouseup', handleMouseUp);

            return () => {
                node.removeEventListener('mousedown', handleMouseDown);
                node.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [ref]);

    return isActive;
};
