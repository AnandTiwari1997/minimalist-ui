import { forwardRef } from 'react';
import type { DividerClasses, DividerProp } from '@minimalist-ui/core/components/divider/types';
import { names, styled, useGenerateClasses } from '@minimalist-ui/core';

const DividerContainer = styled<'div', DividerProp>('div')({
    variants: {
        orientation: {
            horizontal: ({ theme, dividerWidth }) => ({
                borderLeft: `${dividerWidth / 2}px solid ${theme.color.border.light}`,
                borderRight: `${dividerWidth / 2}px solid ${theme.color.border.light}`
            }),
            vertical: ({ theme, dividerWidth }) => ({
                borderTop: `${dividerWidth / 2}px solid ${theme.color.border.light}`,
                borderBottom: `${dividerWidth / 2}px solid ${theme.color.border.light}`
            })
        }
    }
});

export const Divider = forwardRef<HTMLDivElement, DividerProp>((props, forwardRef) => {
    const { width = 2, orientation, className, ...rest } = props;
    const dividerClasses: DividerClasses = {
        orientation
    };
    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('divider', { variants: { ...dividerClasses } });
    return (
        <DividerContainer
            ref={forwardRef}
            className={names(classes.base, classes.root, classes.orientation, className)}
            dividerWidth={width}
            orientation={orientation}
            {...rest}
        ></DividerContainer>
    );
});
