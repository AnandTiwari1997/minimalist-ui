import { type RefObject, useEffect, useState } from 'react';

/**
 * A React hook to track whether a DOM element is being hovered.
 *
 * @param ref - A React ref object pointing to the DOM element to monitor.
 * @returns `true` if the element is being hovered, `false` otherwise.
 *
 * @example
 * const MyComponent = () => {
 *   const hoverRef = useRef(null);
 *   const isHovered = useHover(hoverRef);
 *
 *   return <div ref={hoverRef}>{isHovered ? 'Hovering' : 'Not hovering'}</div>;
 * }
 */
export const useHover = <T extends HTMLElement = HTMLElement>(ref: RefObject<null | T>): boolean => {
    const [isHovering, setHovering] = useState<boolean>(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            const handleMouseEnter = () => setHovering(true);
            const handleMouseLeave = () => setHovering(false);

            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [ref]);

    return isHovering;
};
