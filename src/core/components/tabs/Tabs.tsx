import { Children, forwardRef, isValidElement, useEffect, useRef, useState, type JSX } from 'react';
import type { TabProps, TabsProps } from '@minimalist-ui/core/components/tabs/types';
import { Tab } from '@minimalist-ui/core/components/tabs/Tab';
import { names, useGenerateClasses, useMergedRefs } from '@minimalist-ui/core/utils';
import { styled } from '@minimalist-ui/core/system';
import { KeyBoardNavigation, RovingFocus, useRovingContext } from '../primitive';

const StyledTabs = styled<'div', TabsProps>('div')({
    base: ({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: theme.spacing[3],
        borderBottom: `2px solid ${theme.state.primary.default}`
    })
});

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, forwardRef) => {
    const { children, className, tabs, activeTab, onTabChange, ...rest } = props;
    const [activeValue, setActiveValue] = useState(activeTab);
    const itemRefs = useRef<HTMLButtonElement[]>([]);

    const handleTabClick = (clickEvent: any) => {
        setActiveValue(clickEvent.target.value);
        onTabChange?.(clickEvent.target.value);
    };

    const tabList = children
        ? Children.map(children, (child, index) => {
              if (!isValidElement(child)) return child;
              if (child.type !== Tab) {
                  throw Error('Tabs only support Tab as a children');
              }

              const { children, label, value, disabled } = child.props as TabProps;
              return (
                  <Tab
                      ref={(element: HTMLButtonElement | null) => {
                          itemRefs.current[index] = element!;
                      }}
                      key={value}
                      label={label}
                      value={value}
                      disabled={disabled}
                      onClick={handleTabClick}
                      selected={value === activeValue}
                  >
                      {children}
                  </Tab>
              );
          })
        : tabs?.map((tab, index) => {
              return (
                  <Tab
                      ref={(element: HTMLButtonElement | null) => {
                          itemRefs.current[index] = element!;
                      }}
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                      disabled={tab.disabled}
                      onClick={handleTabClick}
                      selected={tab.value === activeValue}
                  />
              );
          });

    return (
        <RovingFocus>
            <TabList
                ref={forwardRef}
                itemRefs={itemRefs}
                tabList={
                    tabList as (string | number | bigint | JSX.Element | Iterable<React.ReactNode>)[] | null | undefined
                }
                {...rest}
            ></TabList>
        </RovingFocus>
    );
});

const TabList = forwardRef<
    HTMLDivElement,
    {
        itemRefs: React.RefObject<HTMLButtonElement[]>;
        tabList: (string | number | bigint | JSX.Element | Iterable<React.ReactNode>)[] | null | undefined;
    } & TabsProps
>((props, forwardRef) => {
    const { itemRefs, tabList, className, ...rest } = props;

    const { focusItem, registerItem } = useRovingContext();
    const divRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRefs(forwardRef, divRef);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('tabs', {
        parts: []
    });

    const handleKeyDown = (direction: 'next' | 'prev') => {
        const newIndex =
            direction === 'next'
                ? (focusedIndex + 1) % (tabList ?? []).length
                : (focusedIndex - 1 + (tabList ?? []).length) % (tabList ?? []).length;
        setFocusedIndex(newIndex);
        focusItem(newIndex);
    };

    useEffect(() => {
        itemRefs.current.forEach((element, index) => {
            if (element) registerItem(index, { current: element });
        });
    }, [registerItem, tabList?.length]);

    return (
        <KeyBoardNavigation onArrowLeft={() => handleKeyDown('prev')} onArrowRight={() => handleKeyDown('next')}>
            <StyledTabs ref={mergedRef} role="tablist" className={names(classes.root, className)} {...rest}>
                {tabList}
            </StyledTabs>
        </KeyBoardNavigation>
    );
});
