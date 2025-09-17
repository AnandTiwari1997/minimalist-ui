export type AnimationState = 'disabled' | 'hover' | 'idle' | 'pressed';

export type MotionConfig = {
    [K in AnimationState]?: MotionStyle;
};

export type MotionProps = {
    animate?: AnimationState;
    initial?: AnimationState;
    transition?: Transition;
    whileHover?: MotionStyle;
    whilePress?: MotionStyle;
};

export type MotionStyle = {
    background?: string;
    opacity?: number;
    scale?: number;
};

export type Transition = {
    duration?: number;
    easing?: (t: number) => number; // easing function
};
