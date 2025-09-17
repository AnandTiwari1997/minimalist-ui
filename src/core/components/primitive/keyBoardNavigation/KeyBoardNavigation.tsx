import { useKeyBoardNavigation } from '@minimalist-ui/core/hooks/useKeyBoardNavigation';
import { type ReactElement, cloneElement } from 'react';
import type { KeyboardNavigationProps } from '@minimalist-ui/core/components/primitive/keyBoardNavigation/types';

export const KeyBoardNavigation = (props: KeyboardNavigationProps) => {
    const { children, onArrowLeft, onArrowRight, onArrowUp, onArrowDown, onEnter, tabIndex = 0 } = props;
    const { onKeyDown } = useKeyBoardNavigation({
        onArrowDown,
        onEnter,
        onArrowUp,
        onArrowRight,
        onArrowLeft
    });

    if (typeof children === 'function') {
        return (
            <>
                {children({
                    onKeyDown,
                    tabIndex
                })}
            </>
        );
    }

    return cloneElement(children as ReactElement<any>, {
        onKeyDown,
        tabIndex
    });
};
