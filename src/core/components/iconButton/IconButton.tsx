import { forwardRef, useRef } from 'react';
import {
    Button,
    type ButtonProps,
    getState,
    Icon,
    styled,
    type StyledType,
    useActive,
    useFocus,
    useHover,
    useMergedRefs
} from '@minimalist-ui/core';
import type { IconButtonProps } from '@minimalist-ui/core/components/iconButton/types';

const Root = styled<typeof Button, ButtonProps>(Button)({
    base: ({ theme }: StyledType<'button', ButtonProps>) => ({
        borderRadius: theme.radius.sm
    })
});

const IconRoot = styled<typeof Icon, ButtonProps>(Icon)({});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, forwardRef) => {
    const { icon, label, variant, disabled, hidden, size, ...buttonProps } = props;
    const iconVariant = variant === 'primary' ? 'solid' : icon.variant;

    const buttonRef = useRef<HTMLButtonElement>(null);
    const isHovering = useHover(buttonRef);
    const isActive = useActive(buttonRef);
    const isFocusing = useFocus(buttonRef);
    const setRefs = useMergedRefs(buttonRef, forwardRef);

    const currentState = getState({
        active: isActive,
        disabled,
        focused: isFocusing,
        hovered: isHovering
    });

    return (
        <Root ref={setRefs} variant={variant} size={size} {...buttonProps} state={currentState}>
            <IconRoot {...icon} variant={iconVariant} color={'inherit'}></IconRoot>
        </Root>
    );
});
