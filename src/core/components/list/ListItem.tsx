import { forwardRef, useEffect, useId, useRef } from 'react';
import type { ListItemClasses, ListItemProps, ListProps } from '@minimalist-ui/core/components/list/types';
import { useListContext } from '@minimalist-ui/core/components/list/context';
import {
    getState,
    names,
    styled,
    type StyledType,
    useGenerateClasses,
    useHover,
    useMergedRefs
} from '@minimalist-ui/core';

const LIContainer = styled('li')({
    base: ({ theme }: StyledType<'li', ListProps>) => ({
        padding: theme.spacing[2],
        height: theme.spacing[9],
        color: theme.color.text.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    variants: {
        state: {
            hovered: ({ theme }) => ({
                backgroundColor: theme.state.primary.subtle
            })
        }
    }
});

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, forwardRef) => {
    const { disabled, hidden, className, children, role, ...rest } = props;
    const id = useId();
    const ctx = useListContext();
    const listRef = useRef<HTMLLIElement>(null);
    const isHovered = useHover(listRef);
    const setRefs = useMergedRefs(listRef, forwardRef);

    const { role: listRole, activeId, registerItem, unregisterItem } = ctx;

    useEffect(() => {
        registerItem(id, listRef);
        return () => unregisterItem(id);
    }, [id, registerItem, unregisterItem]);

    let itemRole = role;
    if (!itemRole) {
        if (listRole === 'listbox') itemRole = 'option';
        else if (listRole === 'menu') itemRole = 'menuitem';
        else if (listRole === 'tree') itemRole = 'treeitem';
        else if (listRole === 'tablist') itemRole = 'tab';
        else itemRole = 'listitem';
    }

    const currentState = getState({
        hovered: isHovered || activeId == id
    });

    const listItemClasses: ListItemClasses = {
        hidden,
        disabled
    };

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('listitem', { variants: { ...listItemClasses } });

    return (
        <LIContainer
            ref={setRefs}
            id={id}
            role={itemRole}
            className={names(
                classes.base,
                classes.root,
                classes.hidden,
                classes.disabled,
                classes.expanded,
                classes.selected,
                classes.checked,
                className
            )}
            // tabIndex={activeId === id ? 0 : -1}
            state={currentState}
            aria-disabled={disabled}
            aria-hidden={hidden}
            {...rest}
        >
            {children}
        </LIContainer>
    );
});
