import { useKeyDownHandler } from '@minimalist-ui/core/hooks/useKeyDownHandler';
import { useEffect } from 'react';

/**
 * Options for configuring keyboard navigation behavior.
 * @typedef {Object} KeyboardNavigationOptions
 * @property {() => void} [onEnter] - Callback function to be executed when the Enter key is pressed.
 * @property {() => void} [onArrowDown] - Callback function to be executed when the Arrow Down key is pressed.
 * @property {() => void} [onArrowUp] - Callback function to be executed when the Arrow Up key is pressed.
 * @property {() => void} [onArrowLeft] - Callback function to be executed when the Arrow Left key is pressed.
 * @property {() => void} [onArrowRight] - Callback function to be executed when the Arrow Right key is pressed.
 */
export interface KeyboardNavigationOptions {
    onEnter?: () => void;
    onArrowDown?: () => void;
    onArrowUp?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
}

/**
 * A custom React hook for handling keyboard navigation events.
 * @param {KeyboardNavigationOptions} [navigationOptions] - An object containing optional callback functions for different keyboard events.
 * @returns {{ onKeyDown: (event: KeyboardEvent) => void }} - An object with an `onKeyDown` property that should be attached to the desired DOM element.
 */
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
