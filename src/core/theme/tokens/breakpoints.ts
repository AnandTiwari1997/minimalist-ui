export const breakpoints = {
    lg: '1024px',
    md: '768px',
    sm: '480px',
    xl: '1280px'
} as const;

export type Breakpoint = keyof typeof breakpoints;
