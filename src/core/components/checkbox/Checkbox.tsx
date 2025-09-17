import { forwardRef, useEffect, useId, useRef, useState, type ChangeEvent } from 'react';
import type { CheckboxProps } from '@minimalist-ui/core/components/checkbox/types';
import {
    getState,
    type InputClasses,
    names,
    type PropWithState,
    type State,
    styled,
    type StyledType,
    useFocus,
    useGenerateClasses,
    useHover,
    useMergedRefs
} from '@minimalist-ui/core';

type InternalCheckboxProp = PropWithState<CheckboxProps> & {
    checkboxState?: State & { checked?: 'checked' | 'indeterminate' | 'unchecked' };
};

const CheckboxRoot = styled<'div', InternalCheckboxProp>('div')({
    base: ({ label }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...(label && {
            flex: 0.7,
            gap: '8px'
        })
    })
});

const CheckboxInput = styled<'input', InternalCheckboxProp>('input')({
    base: ({ theme }: StyledType<'input', InternalCheckboxProp>) => ({
        backgroundColor: theme.color.background.surface,
        border: `1px solid ${theme.color.border.default}`,
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadow.level0,
        ':hover': {
            border: `1px solid ${theme.color.border.strong}`,
            cursor: 'pointer'
        },
        ':focus': {
            boxShadow: theme.shadow.focus
        },
        ':disabled': {
            cursor: 'not-allowed',
            backgroundColor: theme.color.background.subtle,
            border: `1px solid ${theme.color.border.default}`
        }
    }),
    variants: {
        checkboxState: {
            checked: ({ theme }) => ({
                backgroundColor: theme.state.primary.default,
                border: `1px solid ${theme.state.primary.default}`,
                boxShadow: theme.shadow.level1
            }),
            indeterminate: ({ theme }) => ({
                backgroundColor: theme.state.primary.default,
                border: `1px solid ${theme.state.primary.default}`
            })
        },
        size: {
            sm: {
                height: '16px',
                width: '16px'
            },
            md: {
                height: '20px',
                width: '20px'
            },
            lg: {
                height: '24px',
                width: '24px'
            }
        }
    }
});

const CheckboxLabel = styled('label')({
    base: ({ theme }) => ({
        color: theme.color.text.primary
    })
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
    const {
        indeterminate = false,
        checked = false,
        label,
        size = 'sm',
        disabled,
        hidden,
        className,
        defaultChecked,
        onChange,
        onUpdate,
        'aria-label': ariaLabel,
        ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const isHovering = useHover(inputRef);
    const isFocusing = useFocus(inputRef);
    const setRefs = useMergedRefs(inputRef, forwardedRef);
    const id = useId();
    const [isChecked, updateChecked] = useState((checked || defaultChecked) && !indeterminate);

    const checkboxState = isChecked ? 'checked' : indeterminate ? 'indeterminate' : 'unchecked';
    const currentState = getState({
        active: false,
        disabled,
        focused: isFocusing,
        hovered: isHovering
    });

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    useEffect(() => {
        onUpdate?.({
            checked: checkboxState === 'checked',
            unChecked: checkboxState === 'unchecked',
            indeterminate: checkboxState === 'indeterminate'
        });
    }, [isChecked]);

    const inputClasses: InputClasses = {
        size,
        disabled,
        hover: isHovering,
        focus: isFocusing,
        hidden
    };

    const inputParts = ['label', 'checkbox', 'checked', 'indeterminate'];
    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('checkbox', {
        parts: inputParts,
        variants: { ...inputClasses }
    });

    return (
        <CheckboxRoot classNames={names(classes.base, classes.root, className)} size={size} label={label}>
            <CheckboxInput
                defaultChecked={defaultChecked}
                id={id}
                ref={setRefs}
                aria-label={ariaLabel || label}
                aria-labelledby={id}
                aria-disabled={disabled}
                aria-checked={isChecked}
                type={'checkbox'}
                classNames={names(classes.checkbox, classes.checked, classes.indeterminate, className)}
                disabled={disabled}
                checkboxState={checkboxState}
                size={size}
                state={currentState}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    updateChecked(!isChecked);
                    onChange?.(e);
                }}
                {...rest}
            ></CheckboxInput>
            <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
        </CheckboxRoot>
    );
});
