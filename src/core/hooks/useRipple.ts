import { useState, type MouseEvent, useRef } from 'react';

/**
 * Represents a ripple effect with its position and size.
 */
interface Ripple {
    x: number; // The horizontal position of the ripple.
    y: number; // The vertical position of the ripple.
    size: number; // The size of the ripple.
    key: number; // A unique identifier for the ripple.
}

/**
 * A custom React hook that manages a ripple effect on an element.
 * @param {number} debounceTime - The duration in milliseconds to display each ripple before removing it. Defaults to 300ms.
 * @returns {{ ripples: Ripple[], createRipple: (e: MouseEvent<HTMLElement>) => void, clearRipple: (key: number) => void }} An object containing the current ripple effects, a function to create new ripple effects, and a function to remove ripple effects.
 */
export const useRipple = (debounceTime = 300) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const lastClickTime = useRef(0);

    const createRipple = (e: MouseEvent<HTMLElement>) => {
        const now = Date.now();

        if (now - lastClickTime.current < 200) return;
        lastClickTime.current = now;

        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple: Ripple = { x, y, size, key: now };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.slice(1));
        }, debounceTime);
    };

    const clearRipple = (key: number) => {
        setRipples((prev) => prev.filter((r) => r.key !== key));
    };

    return { ripples, createRipple, clearRipple };
};
