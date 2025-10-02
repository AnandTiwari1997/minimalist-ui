import { getState, styled, useHover, useMergedRefs } from '@minimalist-ui/core';
import { ListItem } from '@minimalist-ui/core/components/list/ListItem';
import React, { forwardRef, useId, useRef } from 'react';
import type { SelectedItemProps } from '@minimalist-ui/core/components/select/types';
import { useRovingItem } from '@minimalist-ui/core/hooks/useRovingItem';

const ExtendListItem = styled(ListItem)({
    base: {
        cursor: 'pointer'
    },
    variants: {
        state: {
            hovered: ({ theme }) => ({
                backgroundColor: theme.state.primary.subtle
            })
        }
    }
});

export const SelectItem = forwardRef<HTMLLIElement, SelectedItemProps>((props: SelectedItemProps, forwardRef) => {
    const { children, id, key, value, label, selected, ...rest } = props;

    const listRef = useRef<HTMLLIElement>(null);
    const isHovered = useHover(listRef);
    const setRefs = useMergedRefs(listRef, forwardRef);
    useRovingItem(listRef as React.RefObject<HTMLElement>)

    const currentState = getState({
        hovered: isHovered || selected
    });

    return (
        <ExtendListItem
            key={value ? value : (key ?? useId())}
            id={value ? value : (id ?? useId())}
            ref={setRefs}
            role={'option'}
            state={currentState}
            aria-selected={selected}
            value={value}
            {...rest}
        >
            {label ? label : children}
        </ExtendListItem>
    );
});
