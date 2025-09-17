import type { KeyboardEvent, ReactElement } from 'react';
import type { KeyboardNavigationOptions } from '@minimalist-ui/core/hooks/useKeyBoardNavigation.ts';

type RenderPropArgs = {
    onKeyDown: (e: KeyboardEvent) => void;
    tabIndex: number;
};

export type KeyboardNavigationProps = KeyboardNavigationOptions & {
    children: ReactElement<any> | ((args: RenderPropArgs) => ReactElement<any>);
    tabIndex?: number;
};
