import { type RefObject, useEffect } from 'react';

/**
 * A custom React hook that traps focus within a container element.
 *
 * @param {RefObject<HTMLElement>} containerRef - A React ref object pointing to the container DOM element.
 * @param {boolean} active - Indicates whether the focus trap should be active or not.
 *
 * @example
 * const MyComponent = () => {
 *   const containerRef = useRef<HTMLElement>(null);
 *   const isActive = true; // Set based on your application's logic
 *
 *   useFocusTrap(containerRef, isActive);
 *
 *   return <div ref={containerRef}>...</div>;
 * }
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement>, active: boolean) {
    useEffect(() => {
        if (!active || !containerRef.current) return;

        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            "[tabindex]:not([tabindex='-1'])"
        ];

        const focusableEls = Array.from(
            containerRef.current.querySelectorAll(focusableSelectors.join(','))
        ) as HTMLElement[];
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                } else if (!e.shiftKey && document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        firstEl?.focus();

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [active, containerRef]);
}

