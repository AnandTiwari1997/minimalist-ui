import { useRef, useState, useCallback, forwardRef, Children, type RefObject } from 'react';
import type { ListClasses, ListContextValue, ListProps } from '@minimalist-ui/core/components/list/types';
import { ListContext } from '@minimalist-ui/core/components/list/context';
import { names, styled, useGenerateClasses, useMergedRefs } from '@minimalist-ui/core';
import { Divider } from '@minimalist-ui/core/components/divider';

export const ULContainer = styled('ul')({
    base: ({ theme }) => ({
        padding: theme.spacing[2],
        margin: theme.spacing[1],
        borderRadius: theme.radius.md,
        color: theme.color.text.primary,
        maxHeight: '200px',
        backgroundColor: theme.color.background.surface,
        boxShadow: theme.shadow.level2
    }),
    variants: {}
});

export const List = forwardRef<HTMLUListElement, ListProps>((props, forwardRef) => {
    const { children, role = 'list', orientation = 'vertical', disabled, hidden, className, ...rest } = props;

    const [activeId, setActiveId] = useState('');
    const [_, setItemIds] = useState<string[]>([]);
    const [itemRefs, setItemRefs] = useState<RefObject<HTMLLIElement>[]>([]);

    const listRef = useRef<HTMLUListElement>(null);
    const setRefs = useMergedRefs(listRef, forwardRef);

    const listOfChildren = Children.toArray(children);

    const registerItem = useCallback((id: string, ref: RefObject<HTMLLIElement | null>) => {
        if (ref.current) {
            setItemIds((prev) => [...prev, id]);
            setItemRefs((prev) => [...prev, ref as RefObject<HTMLLIElement>]);
        }
    }, []);

    const unregisterItem = useCallback((id: string) => {
        setItemIds((prev) => prev.filter((entry) => entry !== id));
    }, []);

    const ctx: ListContextValue = {
        role,
        registerItem,
        unregisterItem,
        items: itemRefs,
        activeId,
        setActiveId
    };

    const listClasses: ListClasses = {
        orientation,
        hidden,
        disabled
    };

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('list', { variants: { ...listClasses } });

    return (
        <ListContext.Provider value={ctx}>
            <ULContainer
                ref={setRefs}
                role={role}
                className={names(
                    classes.base,
                    classes.root,
                    classes.hidden,
                    classes.disabled,
                    classes.orientation,
                    className
                )}
                aria-orientation={orientation}
                aria-hidden={hidden}
                aria-disabled={disabled}
                {...rest}
            >
                {listOfChildren &&
                    listOfChildren.map((value, index) => {
                        return (
                            <>
                                {value}
                                {index < listOfChildren.length - 1 && (
                                    <Divider dividerWidth={1} orientation={orientation}></Divider>
                                )}
                            </>
                        );
                    })}
            </ULContainer>
        </ListContext.Provider>
    );
});
