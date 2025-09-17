import { useEffect } from 'react';

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
