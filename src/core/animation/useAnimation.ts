import type { MotionStyle, Transition } from '@minimalist-ui/core/animation/types';

import React from 'react';

export function useAnimate(target: MotionStyle, transition: Transition = { duration: 200 }) {
    const [style, setStyle] = React.useState(target);

    React.useEffect(() => {
        let raf: number;
        const start = performance.now();
        const initial = style;
        const duration = transition.duration ?? 200;
        const easing = transition.easing ?? ((t: any) => t);

        function tick(now: number) {
            const elapsed = now - start;
            const t = Math.min(1, elapsed / duration);
            const eased = easing(t);

            const next: MotionStyle = {};
            for (const key in target) {
                const k = key as keyof MotionStyle;
                const from = (initial[k] as number) ?? 1;
                const to = (target[k] as number) ?? 1;
                // @ts-ignore
                next[k] = from + (to - from) * eased;
            }

            setStyle(next);
            if (t < 1) {
                raf = requestAnimationFrame(tick);
            }
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [JSON.stringify(target)]);

    return style;
}
