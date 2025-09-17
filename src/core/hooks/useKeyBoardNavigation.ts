import { useKeyDownHandler } from '@minimalist-ui/core/hooks/useKeyDownHandler';
import { useEffect } from 'react';

export interface KeyboardNavigationOptions {
    onEnter?: () => void;
    onArrowDown?: () => void;
    onArrowUp?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
}

export function useKeyBoardNavigation(navigationOptions?: KeyboardNavigationOptions) {
    const { onKeyDown, register, unregister } = useKeyDownHandler();

    useEffect(() => {
        if (!navigationOptions) return;

        const registeredKeys: string[] = [];

        if (navigationOptions.onEnter) {
            register('Enter', navigationOptions.onEnter);
            registeredKeys.push('Enter');
        }
        if (navigationOptions.onArrowDown) {
            register('ArrowDown', navigationOptions.onArrowDown);
            registeredKeys.push('ArrowDown');
        }
        if (navigationOptions.onArrowUp) {
            register('ArrowUp', navigationOptions.onArrowUp);
            registeredKeys.push('ArrowUp');
        }
        if (navigationOptions.onArrowLeft) {
            register('ArrowLeft', navigationOptions.onArrowLeft);
            registeredKeys.push('ArrowLeft');
        }
        if (navigationOptions.onArrowRight) {
            register('ArrowRight', navigationOptions.onArrowRight);
            registeredKeys.push('ArrowRight');
        }

        return () => {
            registeredKeys.forEach((key) => unregister(key));
        };
    }, [navigationOptions, register, unregister]);

    return { onKeyDown };
}
