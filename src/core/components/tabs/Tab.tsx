import { forwardRef, useRef } from 'react';
import type { TabClasses, TabProps } from '@minimalist-ui/core/components/tabs/types';
import { useMergedRefs } from '@minimalist-ui/core/hooks/useMergeRefs';
import { styled, type StyledType } from '@minimalist-ui/core/system';
import { getState, names, useGenerateClasses, useHover } from '@minimalist-ui/core/utils';
import { useRovingItem } from '@minimalist-ui/core/hooks/useRovingItem';

const StyledTab = styled<'button', TabProps>('button')({
    base: ({ theme }: StyledType<'button', TabProps>) => ({
        background: 'transparent',
        padding: `${theme.spacing[3]}`,
        height: '32px',
        fontSize: theme.font.size.sm,
        fontWeight: theme.font.weight.medium,
        borderTopLeftRadius: theme.radius.sm,
        borderTopRightRadius: theme.radius.sm,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'transparent',
        color: theme.color.text.secondary,
        boxSizing: 'border-box',
        cursor: 'pointer',
        ':focus': {
            outline: theme.shadow.focus
        },
        ':disabled': {
            borderBottom: `1px solid ${theme.color.text.disabled}`,
            color: theme.color.text.disabled,
            cursor: 'not-allowed'
        }
    }),
    variants: {
        state: {
            active: ({ theme }: StyledType<'button', TabProps>) => ({
                background: theme.state.primary.default,
                color: theme.color.text.inverse,
                boxShadow: theme.shadow.level1
            }),
            hovered: ({ theme }: StyledType<'button', TabProps>) => ({
                color: theme.state.primary.default
            })
        }
    }
});

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, forwardRef) => {
    const { children, className, label, value, disabled, onClick, selected, ...rest } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergedRefs(forwardRef, buttonRef);
    const hovered = useHover(buttonRef);
    useRovingItem(buttonRef as React.RefObject<HTMLElement>);

    const isActive = getState({
        active: selected,
        hovered: hovered
    });

    const tabClasses: TabClasses = {
        disabled,
        hover: hovered,
        active: selected
    };

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('tab', {
        parts: [],
        variants: { ...tabClasses }
    });

    return (
        <StyledTab
            role="tab"
            ref={mergedRef}
            aria-selected={selected}
            aria-controls={`panel-${value}`}
            tabIndex={0}
            onClick={(ev: any) => {
                if (!disabled) {
                    ev.target['value'] = value;
                    onClick?.(ev);
                }
            }}
            className={names(classes.root, classes.disabled, classes.hover, classes.active, className)}
            disabled={disabled}
            state={isActive}
            {...rest}
        >
            {children || label}
        </StyledTab>
    );
});
