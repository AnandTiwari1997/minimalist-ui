import type { Theme } from '@minimalist-ui/core/theme/types';

import { lightTheme } from '@minimalist-ui/core/theme/ThemeProvider';
import { createContext, useContext } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    theme: Theme;
    toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    mode: 'light',
    setMode: () => {},
    theme: lightTheme,
    toggleMode: () => {}
});

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used inside ThemeProvider');
    }
    return ctx;
}
