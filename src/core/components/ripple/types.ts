import type { ComponentPropsWithCSSPropertiesWithoutRef } from '@minimalist-ui/core';

export type RippleType = 'solid' | 'gradient' | 'outline' | 'glow' | 'pulse' | 'wave' | 'multi' | 'directional';

export interface RippleProps extends ComponentPropsWithCSSPropertiesWithoutRef<'div'> {
    rippleDuration?: number;
    rippleColor?: string;
    type?: RippleType;
    opacity?: number;
}
