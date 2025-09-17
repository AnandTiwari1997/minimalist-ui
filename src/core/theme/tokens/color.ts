import { base_color } from '@minimalist-ui/core';

export const color = {
    dark: {
        background: {
            default: base_color.base.gray['900'],
            overlay: 'rgba(0,0,0,0.6)',
            subtle: base_color.base.gray['700'],
            surface: base_color.base.gray['800']
        },
        border: {
            default: base_color.base.gray['500'],
            focus: base_color.base.blue['500'],
            light: base_color.base.gray['700'],
            strong: base_color.base.gray['500']
        },
        text: {
            deprecated: {
                disabled: 'rgba(255,255,255,0.4)',
                inverse: base_color.base.gray['900'],
                primary: base_color.base.gray['50'],
                secondary: base_color.base.gray['200']
            },
            disabled: 'rgba(249,250,251,0.4)',
            inverse: base_color.black,
            primary: base_color.base.gray['50'],
            secondary: base_color.base.gray['500']
        }
    },
    light: {
        background: {
            default: base_color.base.gray['50'],
            overlay: 'rgba(0,0,0,0.4)',
            subtle: base_color.base.gray['100'],
            surface: base_color.white
        },
        border: {
            default: base_color.base.gray['200'],
            focus: base_color.base.blue['500'],
            light: base_color.base.gray['200'],
            strong: base_color.base.gray['500']
        },
        text: {
            disabled: 'rgba(17,24,39,0.38)',
            inverse: base_color.white,
            primary: base_color.base.gray['900'],
            secondary: base_color.base.gray['500']
        }
    },
    states: {
        error: {
            active: base_color.base.red['700'],
            default: base_color.base.red['500'],
            hover: base_color.base.red['600'],
            subtle: base_color.base.red['50'],
            subtleStrong: base_color.base.red['100'],
            strong: base_color.base.red['800']
        },
        primary: {
            active: base_color.base.blue['700'],
            default: base_color.base.blue['500'],
            hover: base_color.base.blue['600'],
            subtle: base_color.base.blue['50'],
            subtleStrong: base_color.base.blue['100'],
            strong: base_color.base.blue['800']
        },
        secondary: {
            active: base_color.base.indigo['700'],
            default: base_color.base.indigo['500'],
            hover: base_color.base.indigo['600'],
            subtle: base_color.base.indigo['50'],
            subtleStrong: base_color.base.indigo['100'],
            strong: base_color.base.indigo['800']
        },
        success: {
            active: base_color.base.green['700'],
            default: base_color.base.green['500'],
            hover: base_color.base.green['600'],
            subtle: base_color.base.green['50'],
            subtleStrong: base_color.base.green['100'],
            strong: base_color.base.green['800']
        },
        warning: {
            active: base_color.base.amber['700'],
            default: base_color.base.amber['500'],
            hover: base_color.base.amber['600'],
            subtle: base_color.base.amber['50'],
            subtleStrong: base_color.base.amber['100'],
            strong: base_color.base.amber['800']
        }
    }
};
