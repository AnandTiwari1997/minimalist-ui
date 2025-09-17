import {
    type ButtonClasses,
    type ButtonProps,
    names,
    type PropWithState,
    useActive,
    useFocus,
    useGenerateClasses,
    useHover,
    useIconLookup,
    useMergedRefs
} from '@minimalist-ui/core';

import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import { styled, type StyledType } from '@minimalist-ui/core/system';
import React, { useRef } from 'react';
import { Ripple } from '@minimalist-ui/core/components/ripple';

type InternalButtonProp = PropWithState<ButtonProps>;

const ButtonRoot = styled<'button', InternalButtonProp>('button')({
    variants: {
        variant: {
            outline: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                background: 'transparent',
                border: `1px solid ${theme.state.primary.default}`,
                color: theme.state.primary.default,
                ':hover': {
                    background: theme.state.primary.subtle
                },
                ':focus-visible': {
                    boxShadow: theme.shadow.focus
                },
                ':active': {
                    background: theme.state.primary.subtle,
                    border: `1px solid ${theme.state.primary.active}`
                },
                ':disabled': {
                    color: theme.color.text.disabled,
                    border: `1px solid ${theme.color.border.light}`,
                    background: theme.color.background.subtle
                }
            }),
            primary: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                background: theme.state.primary.default,
                color: theme.color.text.inverse,
                boxShadow: theme.shadow.level1,
                ':hover': {
                    background: theme.state.primary.hover,
                    boxShadow: theme.shadow.level2
                },
                ':focus': {
                    outline: 'none'
                },
                ':focus-visible': {
                    outline: 'none',
                    boxShadow: theme.shadow.focus
                },
                ':active': {
                    background: theme.state.primary.active,
                    boxShadow: theme.shadow.level0
                },
                ':disabled': {
                    background: theme.color.border.light,
                    boxShadow: theme.shadow.level0,
                    color: theme.color.text.disabled
                }
            }),
            ghost: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                background: 'transparent',
                color: theme.state.primary.default,
                ':hover': {
                    background: theme.state.primary.subtle
                },
                ':focus-visible': {
                    boxShadow: theme.shadow.focus
                },
                ':active': {
                    background: theme.state.primary.subtle
                },
                ':disabled': {
                    color: theme.color.text.disabled,
                    background: theme.color.background.subtle
                }
            }),
            flat: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                background: 'transparent',
                color: theme.state.primary.default,
                ':hover': {
                    color: theme.state.primary.strong
                },
                ':focus-visible': {
                    boxShadow: theme.shadow.focus
                },
                ':active': {
                    background: theme.state.primary.subtleStrong
                },
                ':disabled': {
                    color: theme.color.text.disabled
                }
            })
        },
        size: {
            sm: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                fontSize: theme.font.size.xs,
                fontWeight: theme.font.weight.medium,
                gap: theme.spacing[2],
                height: '32px',
                margin: theme.spacing[1],
                borderRadius: theme.radius.sm
            }),
            md: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                fontSize: theme.font.size.sm,
                fontWeight: theme.font.weight.medium,
                gap: theme.spacing[2],
                height: '40px',
                margin: theme.spacing[1],
                padding: theme.spacing[3],
                borderRadius: theme.radius.sm
            }),
            lg: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
                fontSize: theme.font.size.md,
                fontWeight: theme.font.weight.bold,
                gap: theme.spacing[3],
                height: '48px',
                margin: theme.spacing[1],
                padding: theme.spacing[5],
                borderRadius: theme.radius.sm
            })
        }
    },
    base: ({ theme }: StyledType<'button', InternalButtonProp>) => ({
        border: 'none',
        cursor: 'pointer',
        padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
        ':disabled': {
            cursor: 'not-allowed'
        }
    })
});

const Content = styled('span')({
    base: ({ theme }: StyledType<'span', InternalButtonProp>) => ({
        fontWeight: theme.font.weight.medium,
        lineHeight: 1,
        textTransform: 'uppercase'
    })
});

const IconRoot = styled<typeof Icon, InternalButtonProp>(Icon)({
    base: {
        display: 'inline-flex',
        color: 'inherit !important'
    },
    variants: {
        iconPlacement: {
            leading: ({ theme }) => ({
                marginRight: theme.spacing[1]
            }),
            trailing: ({ theme }) => ({
                marginLeft: theme.spacing[1]
            })
        },
        state: {
            focused: ({ theme }) => ({
                color: theme.color.border.focus
            }),
            error: ({ theme }) => ({
                color: theme.state.error.default
            })
        }
    }
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, forwardedRef) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const isHovering = useHover(buttonRef);
    const isActive = useActive(buttonRef);
    const isFocusing = useFocus(buttonRef);

    const setRefs = useMergedRefs(buttonRef, forwardedRef);

    const {
        label,
        size = 'sm',
        variant = 'primary',
        disabled,
        className,
        children,
        icon,
        iconPlacement = 'leading',
        ariaLabel,
        hidden,
        allowClickEffect,
        ...rest
    } = props;

    const buttonClasses: ButtonClasses = {
        variant,
        size,
        disabled,
        hover: isHovering,
        active: isActive,
        focus: isFocusing,
        hidden
    };

    const buttonParts = ['leadingIcon', 'trailingIcon', 'content'];

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('button', {
        parts: buttonParts,
        variants: { ...buttonClasses }
    });
    const content = <Content className={names(classes.content)}>{label ? label : children}</Content>;

    const foundIcon = useIconLookup(icon);
    const iconVariant = variant === 'outline' ? 'outline' : 'solid';
    const Icon = foundIcon ? (
        <IconRoot
            icon={foundIcon}
            variant={iconVariant}
            size={size}
            aria-label={'button-icon'}
            className={names(iconPlacement === 'leading' ? classes.leadingIcon : classes.trailingIcon)}
        />
    ) : (
        icon
    );

    return (
        <ButtonRoot
            ref={setRefs}
            aria-disabled={disabled}
            aria-label={ariaLabel || label}
            aria-hidden={hidden}
            autoFocus={false}
            className={names(
                classes.base,
                classes.root,
                classes.variant,
                classes.size,
                classes.disabled,
                classes.hover,
                classes.active,
                classes.focus,
                classes.hidden,
                className
            )}
            size={size}
            variant={variant}
            disabled={disabled}
            hidden={hidden}
            {...rest}
        >
            {icon && iconPlacement === 'leading' && <>{Icon}</>}
            {content}
            {icon && iconPlacement === 'trailing' && <>{Icon}</>}
            {allowClickEffect && <Ripple rippleDuration={1000} />}
        </ButtonRoot>
    );
});
