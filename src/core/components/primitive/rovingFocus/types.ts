import type { ReactNode, RefObject } from 'react';

type RenderPropArgs = {
    focusItem: (i: number) => void;
    registerItem: (id: number, ref: RefObject<HTMLElement | null>) => void;
};

export interface RovingFocusProps {
    children: ReactNode | ((args: RenderPropArgs) => ReactNode);
}

export interface RovingContextValue {
    focusItem: (index: number) => void;
    registerItem: (id: number, ref: RefObject<HTMLElement | null>) => void;
}
