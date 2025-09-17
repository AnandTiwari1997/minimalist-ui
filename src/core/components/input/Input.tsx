import type { InputClasses, InputProps } from '@minimalist-ui/core/components/input/types';
import { forwardRef, type Ref, useEffect, useId, useRef, useState, type FocusEvent, type ChangeEvent } from 'react';
import {
    getState,
    names,
    type PropWithState,
    styled,
    useFocus,
    useGenerateClasses,
    useHover,
    useIconLookup,
    useMergedRefs
} from '@minimalist-ui/core';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';

type InternalInputProp = PropWithState<InputProps> & { overrideSize?: InputProps['size'] };

const InputRoot = styled<'div', InternalInputProp>('div')({
    base: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const Label = styled<'label', InternalInputProp>('label')({
    base: ({ theme }) => ({
        color: theme.color.text.secondary,
        fontWeight: theme.font.weight.medium
    }),
    variants: {
        overrideSize: {
            sm: ({ theme }) => ({
                fontSize: theme.font.size.sm
            }),
            md: ({ theme }) => ({
                fontSize: theme.font.size.md
            }),
            lg: ({ theme }) => ({
                fontSize: theme.font.size.lg
            })
        },
        state: {
            focused: ({ theme }) => ({
                color: theme.color.border.focus
            }),
            disabled: ({ theme }) => ({
                color: theme.color.text.disabled
            }),
            error: ({ theme }) => ({
                color: theme.state.error.default
            })
        }
    }
});

const FieldWrapper = styled<'div', InternalInputProp>('div')({
    base: ({ theme }) => ({
        width: '100%',
        color: theme.color.text.primary,
        fontWeight: theme.font.weight.regular,
        backgroundColor: theme.color.background.surface,
        padding: `0 ${theme.spacing[2]}`,
        position: 'relative',
        ':disabled': {
            cursor: 'not-allowed',
            color: theme.color.text.disabled,
            backgroundColor: theme.color.background.subtle
        }
    }),
    variants: {
        variant: {
            primary: ({ theme }) => ({
                border: `1px solid transparent`,
                backgroundColor: theme.color.background.subtle,
                ':invalid': {
                    backgroundColor: theme.state.error.subtle,
                    border: `1px solid ${theme.state.error.default}`,
                    color: theme.state.error.strong
                }
            }),
            outline: ({ theme }) => ({
                border: `1px solid ${theme.color.border.default}`,
                ':disabled': {
                    border: `1px solid ${theme.color.border.light}`
                }
            }),
            ghost: ({ theme }) => ({
                backgroundColor: 'transparent',
                borderRadius: 0,
                borderBottom: `1px solid ${theme.color.border.light}`,
                ':disabled': {
                    backgroundColor: 'transparent'
                }
            })
        },
        overrideSize: {
            sm: ({ theme }) => ({
                height: '32px',
                lineHeight: theme.font.lineHeight.normal,
                fontSize: theme.font.size.sm,
                borderRadius: theme.radius.sm
            }),
            md: ({ theme }) => ({
                height: '40px',
                lineHeight: theme.font.lineHeight.normal,
                fontSize: theme.font.size.md,
                borderRadius: theme.radius.md
            }),
            lg: ({ theme }) => ({
                height: '48px',
                lineHeight: theme.font.lineHeight.relaxed,
                fontSize: theme.font.size.lg,
                borderRadius: theme.radius.lg
            })
        }
    },
    concatenatedVariants: [
        {
            variant: {
                variant: 'primary',
                state: 'hovered'
            },
            style: ({ theme }) => ({
                border: `1px solid ${theme.color.border.default}`
            })
        },
        {
            variant: {
                variant: 'outline',
                state: 'hovered'
            },
            style: ({ theme }) => ({
                border: `1px solid ${theme.color.border.strong}`
            })
        },
        {
            variant: {
                variant: 'ghost',
                state: 'hovered'
            },
            style: ({ theme }) => ({
                backgroundColor: theme.color.background.subtle
            })
        },
        {
            variant: {
                variant: 'primary',
                state: 'focused'
            },
            style: ({ theme }) => ({
                backgroundColor: theme.color.background.surface
            })
        },
        {
            variant: {
                variant: 'outline',
                state: 'focused'
            },
            style: {
                border: 'none'
            }
        },
        {
            variant: {
                variant: 'ghost',
                state: 'focused'
            },
            style: ({ theme }) => ({
                borderBottom: 'none',
                backgroundColor: theme.color.background.subtle
            })
        }
    ]
});

const BorderAnimate = styled<'span', InternalInputProp>('span')({
    base: ({ theme }) => ({
        position: 'absolute',
        inset: 0,
        transition: 'transform 220ms ease',
        pointerEvents: 'none',
        border: `1px solid ${theme.color.border.focus}`,
        borderRadius: theme.radius.sm,
        transform: `scale(0.9)`,
        opacity: 0,
        zIndex: 2
    }),
    variants: {
        variant: {
            ghost: ({ theme }) => ({
                inset: 'none',
                bottom: 0,
                left: 0,
                height: `1px`,
                width: `100%`,
                transform: `scaleX(0)`,
                transformOrigin: `center`,
                border: 'none',
                borderBottom: `1px solid ${theme.color.border.focus}`
            })
        },
        state: {
            focused: {
                transform: `scale(1)`,
                opacity: 1
            },
            error: ({ theme, variant }) => ({
                border: `1px solid ${theme.state.error.default}`,
                ...(variant === 'ghost' && {
                    border: 'none',
                    borderBottom: `1px solid ${theme.state.error.default}`
                }),
                transform: `scale(1)`,
                opacity: 1
            })
        }
    }
});

const IconRoot = styled(Icon)({
    variants: {
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

const InputField = styled<'input', InternalInputProp>('input')({
    base: ({ theme }) => ({
        width: '100%',
        height: '100%',
        color: theme.color.text.primary,
        fontWeight: theme.font.weight.regular,
        backgroundColor: 'inherit',
        padding: `0 ${theme.spacing[3]}`,
        position: 'relative',
        outline: 'none',
        zIndex: 1,
        '::placeholder': {
            color: theme.color.text.secondary,
            fontStyle: 'italic',
            textTransform: 'capitalize'
        },
        ':disabled': {
            cursor: 'not-allowed',
            color: theme.color.text.disabled,
            backgroundColor: theme.color.background.subtle
        }
    })
});

const HelperText = styled<'span', InternalInputProp>('span')({
    base: ({ theme }) => ({
        color: theme.color.text.secondary,
        ':disabled': {
            color: theme.color.text.disabled
        }
    }),
    variants: {
        overrideSize: {
            sm: {
                fontSize: `10px`
            },
            md: ({ theme }) => ({
                fontSize: theme.font.size.xs
            }),
            lg: ({ theme }) => ({
                fontSize: theme.font.size.sm
            })
        }
    }
});

const ErrorText = styled(HelperText)({
    base: ({ theme }) => ({
        color: theme.state.error.default
    })
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, forwardedRef: Ref<HTMLInputElement>) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const isHovering = useHover(inputRef);
        const isFocusing = useFocus(inputRef);
        const id = useId();

        const setRefs = useMergedRefs(inputRef, forwardedRef);

        const {
            label,
            size = 'sm',
            variant = 'primary',
            disabled,
            className,
            children,
            value,
            defaultValue,
            icon,
            iconPlacement = 'leading',
            ariaLabel,
            hidden,
            placeholder,
            helperText,
            errorText,
            onValidate,
            onChange,
            ...rest
        } = props;

        const [internalError, setInternalError] = useState<string | undefined>(undefined);
        const [internalValue, setInternalValue] = useState(defaultValue ?? '');
        const isControlled = value !== undefined;
        const currentValue = isControlled ? value : internalValue;

        useEffect(() => setInternalError(errorText), [errorText]);

        const inputClasses: InputClasses = {
            size,
            disabled,
            hover: isHovering,
            active: false,
            focus: isFocusing,
            hidden
        };

        const inputParts = ['leadingIcon', 'trailingIcon', 'label', 'helperText', 'field', 'errorText', 'placeholder'];

        const utilityClasses = useGenerateClasses();
        const classes = utilityClasses('input', {
            parts: inputParts,
            variants: { ...inputClasses }
        });

        const currentState = getState({
            active: false,
            disabled,
            focused: isFocusing,
            hovered: isHovering,
            error: internalError !== undefined
        });

        const inputPlaceholder = isFocusing ? undefined : placeholder;

        const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
            const element = e.target;
            if (errorText) return;
            if (onValidate) {
                const msg = onValidate(element.value);
                setInternalError(msg || '');
            } else if (!element.checkValidity()) {
                setInternalError(element.validationMessage);
            } else {
                setInternalError(undefined);
            }
        };

        const foundIcon = useIconLookup(icon);
        const iconVariant = variant === 'outline' ? 'outline' : 'solid';
        const Icon = foundIcon ? (
            <IconRoot
                icon={foundIcon}
                variant={iconVariant}
                size={size}
                aria-label={'input-icon'}
                state={currentState}
                className={names(iconPlacement === 'leading' ? classes.leadingIcon : classes.trailingIcon)}
            />
        ) : (
            icon
        );

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            if (!isControlled) {
                setInternalValue(newValue);
            }
            onChange?.(e);
        };

        return (
            <InputRoot className={names(classes.base, classes.root, 'w-60')}>
                <Label htmlFor={id} overrideSize={size} className={names(classes.label, 'w-full')} state={currentState}>
                    {label}
                </Label>
                <FieldWrapper
                    state={currentState}
                    overrideSize={size}
                    variant={variant}
                    className={'flex items-center relative'}
                >
                    {icon && iconPlacement === 'leading' && <>{Icon}</>}
                    <InputField
                        overrideSize={size}
                        variant={variant}
                        aria-label={ariaLabel || label}
                        aria-disabled={disabled}
                        aria-hidden={hidden}
                        aria-invalid={internalError !== undefined}
                        ref={setRefs}
                        placeholder={inputPlaceholder}
                        value={currentValue}
                        onChange={handleChange}
                        className={names(
                            classes.field,
                            classes.placeholder,
                            classes.hover,
                            classes.active,
                            classes.disabled,
                            classes.focus,
                            'w-full',
                            className
                        )}
                        id={id}
                        onBlur={handleBlur}
                        {...rest}
                    />
                    {icon && iconPlacement === 'trailing' && <>{Icon}</>}
                    <BorderAnimate state={currentState} variant={variant}></BorderAnimate>
                </FieldWrapper>
                {internalError && (
                    <ErrorText overrideSize={size} className={names(classes.errorText, 'w-full')}>
                        {internalError}
                    </ErrorText>
                )}
                {!internalError && helperText && (
                    <HelperText overrideSize={size} className={names(classes.helperText, 'w-full')}>
                        {helperText}
                    </HelperText>
                )}
            </InputRoot>
        );
    }
);
