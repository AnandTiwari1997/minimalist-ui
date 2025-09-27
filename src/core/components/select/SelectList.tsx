import { KeyBoardNavigation, List, names, useRovingContext } from '@minimalist-ui/core';
import { cloneElement, type ReactElement, useEffect, useRef, useState } from 'react';
import type { SelectListProps } from '@minimalist-ui/core/components/select/types';
import { SelectItem } from '@minimalist-ui/core/components/select/SelectItem';

export const SelectList = ({
    options,
    selectedIndex,
    onSelect,
    listBoxId,
    labelledById,
    classes,
    ...rest
}: SelectListProps) => {
    const { focusItem, registerItem } = useRovingContext();
    const [activeIndex, setActiveIndex] = useState(selectedIndex ?? -1);

    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        itemRefs.current.forEach((element, index) => {
            if (element) registerItem(index, { current: element });
        });
    }, [registerItem, options?.length]);

    useEffect(() => {
        if (selectedIndex != null && selectedIndex !== -1) {
            focusItem(selectedIndex);
            setActiveIndex(selectedIndex);
        }
    }, [selectedIndex, focusItem]);

    const handleKeyDown = (direction: 'next' | 'prev') => {
        const newIndex =
            direction === 'next'
                ? (activeIndex + 1) % (options ?? []).length
                : (activeIndex - 1 + (options ?? []).length) % (options ?? []).length;
        setActiveIndex(newIndex);
        focusItem(newIndex);
    };

    return (
        <KeyBoardNavigation
            tabIndex={0}
            onArrowDown={() => handleKeyDown('next')}
            onArrowUp={() => handleKeyDown('prev')}
            onArrowLeft={() => handleKeyDown('prev')}
            onArrowRight={() => handleKeyDown('next')}
            onEnter={() => {
                if (activeIndex !== -1) {
                    onSelect(activeIndex);
                }
            }}
        >
            <List
                id={listBoxId}
                role={'listbox'}
                aria-labelledby={labelledById}
                className={names(classes.options)}
                {...rest}
            >
                {options.map((child, index) => {
                    if (child.type === SelectItem) {
                        return cloneElement(child as ReactElement<any>, {
                            ref: (element: HTMLLIElement) => (itemRefs.current[index] = element),
                            className: names(classes.option),
                            selected: activeIndex === index,
                            onClick: () => onSelect(index)
                        });
                    } else {
                        console.warn('Option is not a SelectItem component:', child.type);
                        return child;
                    }
                })}
            </List>
        </KeyBoardNavigation>
    );
};
