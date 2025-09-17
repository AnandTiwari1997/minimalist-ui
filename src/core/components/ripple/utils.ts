// Resolve "currentColor" or hex → rgba
import type { RippleProps } from '@minimalist-ui/core/components/ripple/types.ts';
import React from 'react';

export const resolveColor = (button: HTMLElement, color: string, alpha: number): string => {
    if (color === 'currentColor') {
        const computed = getComputedStyle(button).color; // e.g. rgb(34,197,94)
        return computed.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
    }
    if (color.startsWith('#')) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return color; // fallback: CSS named color or already rgba
};

export function getRippleStyle(effect: RippleProps, button: HTMLElement): React.CSSProperties {
    const { type = 'gradient', rippleColor = 'currentColor', opacity = 0.4, rippleDuration = 600 } = effect;

    const resolvedColor = resolveColor(button, rippleColor, opacity);

    let style: React.CSSProperties = {
        opacity,
        animation: `ripple-${type} ${rippleDuration}ms ease-out forwards`
    };

    switch (type) {
        case 'solid':
            style.background = resolvedColor;
            break;
        case 'gradient':
            style.background = `radial-gradient(circle, ${resolvedColor} 40%, transparent 80%)`;
            break;
        case 'outline':
            style.border = `2px solid ${resolvedColor}`;
            style.background = 'transparent';
            break;
        case 'glow':
            style.background = resolvedColor;
            style.boxShadow = `0 0 20px 6px ${resolvedColor}`;
            break;
        case 'pulse':
            style.background = resolvedColor;
            break;
        case 'wave':
            style.border = `2px solid ${resolvedColor}`;
            style.background = 'transparent';
            break;
    }

    return style;
}
