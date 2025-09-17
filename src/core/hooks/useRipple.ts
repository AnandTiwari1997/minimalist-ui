import { useState, type MouseEvent, useRef } from 'react';

interface Ripple {
    x: number;
    y: number;
    size: number;
    key: number;
}

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
