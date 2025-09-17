import { type ReactElement, useMemo } from 'react';
import { type IconDefinition, isIconDefinition, isReactElement } from '@minimalist-ui/core/icons/utils/types';
import { getIcon } from '@minimalist-ui/core/icons';

export function useIconLookup(icon: string | IconDefinition | ReactElement | undefined) {
    return useMemo<IconDefinition | undefined>(() => {
        if (!icon) return undefined;
        if (isReactElement(icon)) return undefined;
        if (isIconDefinition(icon)) return icon;
        return getIcon(icon);
    }, [icon]);
}
