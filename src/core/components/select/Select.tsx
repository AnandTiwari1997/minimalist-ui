import { Children, forwardRef, type ReactElement, useId, useRef, useState } from 'react';
import type { SelectClasses, SelectProps } from '@minimalist-ui/core/components/select/types';
import {
    getState,
    names,
    Overlay,
    styled,
    useFocus,
    useGenerateClasses,
    useHover,
    useMergedRefs
} from '@minimalist-ui/core';
import { RovingFocus } from '@minimalist-ui/core/components/primitive/rovingFocus/RovingFocus';
import { SelectList } from '@minimalist-ui/core/components/select/SelectList';
import { SelectItem } from '@minimalist-ui/core/components/select/SelectItem';

const SelectContainer = styled('div')({
    base: ({ theme }) => ({
        position: 'relative',
        width: '160px',
        height: '40px',
        backgroundColor: theme.color.background.surface,
        userSelect: 'none'
    })
});

const SelectTriggerContainer = styled<'div', SelectProps & { state?: string }>('div')({
    base: ({ theme }) => ({
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'start',
        height: '100%',
        width: '100%',
        color: theme.color.text.primary,
        fontFamily: theme.font.family,
        fontWeight: theme.font.weight.regular,
        border: `1px solid ${theme.color.border.default}`,
        borderRadius: theme.radius.sm,
        padding: `0 ${theme.spacing[3]}`,
        '::after': {
            content: '""',
            position: 'absolute',
            right: '1rem',
            pointerEvents: 'none',
            borderLeft: '0.3rem solid transparent',
            borderRight: '0.3rem solid transparent',
            borderTop: `0.3rem solid ${theme.color.text.secondary}`,
            top: '50%'
        },
        ':hover': {
            backgroundColor: theme.color.background.subtle,
            border: `1px solid ${theme.color.border.strong}`
        },
        ':focus': {
            boxShadow: theme.shadow.focus,
            border: `1px solid ${theme.color.border.focus}`
        },
        ':disabled': {
            cursor: 'not-allowed',
            color: theme.color.text.disabled,
            backgroundColor: theme.color.background.subtle,
            border: `1px solid ${theme.color.border.subtle}`
        }
    }),
    variants: {
        state: {
            active: ({ theme }) => ({
                border: `1px solid ${theme.color.border.focus}`
            })
        }
    }
});

const SelectRoot = forwardRef<HTMLSelectElement, SelectProps>((props, forwardedRef) => {
    const {
        children,
        disabled,
        hidden,
        className,
        value,
        defaultValue,
        options,
        placeholder,
        onClick,
        onKeyDown,
        onChange,
        ...rest
    } = props;

    const selectRef = useRef<HTMLSelectElement>(null);
    const isHovering = useHover(selectRef);
    const isFocusing = useFocus(selectRef);
    const setRefs = useMergedRefs(selectRef, forwardedRef);
    const id = useId();
    const listBoxId = useId();
    const [isOpened, setOpened] = useState(false);

    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const selected = isControlled ? value : internalValue;

    const selectOptions = options
        ? options.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                  {o.label}
              </SelectItem>
          ))
        : (Children.toArray(children) as ReactElement[]);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(
        selectOptions.findIndex((selectOption) => {
            if ('value' in (selectOption.props ?? {})) {
                return selectOption.props.value === selected;
            }
            return false;
        })
    );

    const currentState = getState({
        active: isOpened,
        disabled,
        focused: isFocusing,
        hovered: isHovering
    });

    const selectClasses: SelectClasses = {
        disabled,
        hover: isHovering,
        focus: isFocusing,
        hidden
    };

    const selectParts = ['trigger', 'label', 'icon', 'options', 'option'];
    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('checkbox', {
        parts: selectParts,
        variants: { ...selectClasses }
    });

    const handleOnClick = (event: any) => {
        event.stopPropagation();
        setOpened(!isOpened);
        onClick?.(event);
    };

    const handleOnEnter = (event: any) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
            setOpened(!isOpened);
            onKeyDown?.(event);
        }
    };

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        setOpened(false);
        if (!isControlled) {
            setInternalValue(selectOptions[index].props.value);
        }
        onChange?.(selectOptions[index].props.value);
    };

    return (
        <SelectContainer
            role={'combobox'}
            aria-haspopup={'listbox'}
            aria-expanded={isOpened}
            aria-controls={listBoxId}
            id={id}
            ref={setRefs}
            tabIndex={0}
            className={names(classes.base, classes.root, className)}
            disabled={disabled}
            hidden={hidden}
            onClick={handleOnClick}
            onKeyDown={handleOnEnter}
            {...rest}
        >
            <SelectTriggerContainer state={currentState} className={names(classes.trigger)}>
                <span className={names(classes.label)}>
                    {selectedIndex != null && selectedIndex >= 0
                        ? selectOptions[selectedIndex].props.label || selectOptions[selectedIndex].props.children
                        : placeholder}
                </span>
            </SelectTriggerContainer>

            {isOpened && selectRef.current && (
                <Overlay
                    token={'popover'}
                    anchor={selectRef.current!}
                    backdrop={true}
                    dismissEvents={['esc', 'outside-click']}
                    anchorPlacement={{ anchor: 'middle', placement: 'bottom' }}
                    onDismiss={() => setOpened(false)}
                    css={{
                        width: `${selectRef.current!.offsetWidth}px`
                    }}
                >
                    <RovingFocus>
                        <SelectList
                            options={selectOptions}
                            selectedIndex={selectedIndex}
                            onSelect={handleSelect}
                            listBoxId={listBoxId}
                            labelledById={id}
                            classes={classes}
                        />
                    </RovingFocus>
                </Overlay>
            )}
        </SelectContainer>
    );
});

export const Select = Object.assign(SelectRoot, {
    Item: SelectItem
});
