import { type ReactElement, useMemo } from 'react';
import { type IconDefinition, isIconDefinition, isReactElement } from '@minimalist-ui/core/icons/utils/types';
import { getIcon } from '@minimalist-ui/core/icons';

/**
 * A custom hook that looks up an icon based on the provided input.
 * @param {string | IconDefinition | ReactElement | undefined} icon - The input to look up the icon. It can be a string, IconDefinition, ReactElement, or undefined.
 * @returns {IconDefinition | undefined} The looked-up icon definition, or undefined if not found.
 */
export function useIconLookup(icon: string | IconDefinition | ReactElement | undefined) {
    return useMemo<IconDefinition | undefined>(() => {
        if (!icon) return undefined;
        if (isReactElement(icon)) return undefined;
        if (isIconDefinition(icon)) return icon;
        return getIcon(icon);
    }, [icon]);
}
