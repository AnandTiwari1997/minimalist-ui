export const cssUnits = [
    // length - absolute
    'cm',
    'mm',
    'Q',
    'in',
    'pc',
    'pt',
    'px',
    // length - relative font
    'em',
    'ex',
    'ch',
    'rem',
    // length - viewport
    'vw',
    'vh',
    'vmin',
    'vmax',
    'svw',
    'svh',
    'svmin',
    'svmax',
    'lvw',
    'lvh',
    'lvmin',
    'lvmax',
    'dvw',
    'dvh',
    'dvmin',
    'dvmax',
    // time
    's',
    'ms',
    // angle
    'deg',
    'grad',
    'rad',
    'turn',
    // resolution
    'dpi',
    'dpcm',
    'dppx',
    // flex
    'fr',
    // percentage
    '%'
] as const;

export type CSSUnit = (typeof cssUnits)[number];
