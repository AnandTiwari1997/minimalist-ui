import { createContext, useContext } from 'react';
import type { ListContextValue } from '@minimalist-ui/core/components/list/types';

export const ListContext = createContext<ListContextValue | null>(null);

export function useListContext() {
    const ctx = useContext(ListContext);
    if (!ctx) throw new Error('ListItem must be inside List');
    return ctx;
}
