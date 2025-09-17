export interface Theme {
    breakpoints: {
        lg: string;
        md: string;
        sm: string;
        xl: string;
    };
    color: {
        background: {
            default: string;
            overlay: string;
            subtle: string;
            surface: string;
        };
        base: { [key: string]: { [key: string]: string } };
        black: string;
        border: {
            default: string;
            focus: string;
            light: string;
            strong: string;
        };
        text: {
            disabled: string;
            inverse: string;
            primary: string;
            secondary: string;
        };
        white: string;
    };
    font: {
        family: string;
        letterSpacing: {
            caps: string;
            normal: string;
        };
        lineHeight: {
            normal: number;
            relaxed: number;
            tight: number;
        };
        size: {
            lg: string;
            md: string;
            sm: string;
            xl: string;
            xs: string;
        };
        weight: {
            bold: number;
            medium: number;
            regular: number;
        };
    };
    radius: {
        lg: string;
        md: string;
        pill: string;
        sm: string;
        xl: string;
    };
    shadow: {
        focus: string;
        level0: string;
        level1: string;
        level2: string;
        level3: string;
    };
    // spacing: {
    //     lg: string;
    //     md: string;
    //     sm: string;
    //     xl: string;
    //     xs: string;
    // };
    spacing: string[];
    state: {
        error: {
            active: string;
            default: string;
            hover: string;
            subtle: string;
            subtleStrong: string;
            strong: string;
        };
        primary: {
            active: string;
            default: string;
            hover: string;
            subtle: string;
            subtleStrong: string;
            strong: string;
        };
        secondary: {
            active: string;
            default: string;
            hover: string;
            subtle: string;
            subtleStrong: string;
            strong: string;
        };
        success: {
            active: string;
            default: string;
            hover: string;
            subtle: string;
            subtleStrong: string;
            strong: string;
        };
        warning: {
            active: string;
            default: string;
            hover: string;
            subtle: string;
            subtleStrong: string;
            strong: string;
        };
    };
    transition: {
        fast: string;
        normal: string;
        slow: string;
    };
    zIndex: {
        alert: number;
        base: number;
        modal: number;
        popover: number;
        tooltip: number;
        toast: number;
    };
}
