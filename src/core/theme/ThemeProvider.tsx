import type { Theme } from '@minimalist-ui/core';

import { ThemeContext, type ThemeMode } from '@minimalist-ui/core/theme/ThemeContext';
import {
    base_color,
    breakpoints,
    color,
    radius,
    shadow,
    spacing,
    transition,
    typography,
    zIndex
} from '@minimalist-ui/core/theme/tokens';
import { injectCssVariables } from '@minimalist-ui/core/theme/utils';
import React, { useEffect, useState } from 'react';

export const darkTheme: Theme = {
    breakpoints: breakpoints,
    color: {
        background: color.dark.background,
        base: base_color.base,
        black: base_color.black,
        border: color.dark.border,
        text: color.dark.text,
        white: base_color.white
    },
    font: typography,
    radius: radius,
    shadow: shadow.dark,
    spacing: spacing,
    state: color.states,
    transition: transition,
    zIndex: zIndex
};

export const lightTheme: Theme = {
    breakpoints: breakpoints,
    color: {
        background: color.light.background,
        base: base_color.base,
        black: base_color.black,
        border: color.light.border,
        text: color.light.text,
        white: base_color.white
    },
    font: typography,
    radius: radius,
    shadow: shadow.light,
    spacing: spacing,
    state: color.states,
    transition: transition,
    zIndex: zIndex
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>('light');

    const theme = mode === 'dark' ? darkTheme : lightTheme;

    const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

    useEffect(() => {
        const selector = mode === 'dark' ? '[data-theme="dark"]' : ':root';
        injectCssVariables(theme, { id: 'ds-theme', selector });
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode, theme]);

    return <ThemeContext.Provider value={{ mode, setMode, theme, toggleMode }}>{children}</ThemeContext.Provider>;
};
