import { useEffect } from 'react';

/**
 * Custom React hook to manage the 'inert' attribute of elements outside an overlay element when it is active.
 * @param {React.RefObject<HTMLElement>} overlayRef - Reference to the overlay element.
 * @param {boolean} active - Whether the overlay is currently active or not.
 */
export function useInert(overlayRef: React.RefObject<HTMLElement>, active: boolean) {
    useEffect(() => {
        if (!active) return;

        const overlayEl = overlayRef.current;
        if (!overlayEl) return;

        const root = document.body;
        const siblings = Array.from(root.children).filter((el) => el !== overlayEl && !el.contains(overlayEl));

        siblings.forEach((el) => el.setAttribute('inert', ''));

        return () => {
            siblings.forEach((el) => el.removeAttribute('inert'));
        };
    }, [overlayRef, active]);
}
