import { styled, type StyledType } from '@minimalist-ui/core/system';
import type { BadgeProps, BadgeLabelProps, BadgeClasses } from './types';
import { forwardRef, useRef } from 'react';
import { getState, names, useGenerateClasses, useHover, useMergedRefs } from '@minimalist-ui/core/utils';
import type { PropWithState } from '@minimalist-ui/core';

type InternalBadgeProp = PropWithState<BadgeProps>;

const ROOT = styled<'span', InternalBadgeProp>('span')({
    base: {
        position: `relative`,
        display: `inline-flex`,
        verticalAlign: `middle`,
        flexShrink: `0`,
        justifyContent: `center`,
        alignItems: `center`
    }
});

const LABEL = styled<'span', BadgeLabelProps>('span')({
    base: ({
        anchorOrigin: anchorOrigin = {
            vertical: 'center',
            horizontal: 'center'
        },
        theme
    }: StyledType<'span', BadgeLabelProps>) => {
        const verticalPos = anchorOrigin.vertical;
        const horizontalPos = anchorOrigin.horizontal;
        const translateMap = {
            left: -1,
            right: 1,
            bottom: 1,
            top: -1,
            center: 0
        };
        return {
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            alignContent: `center`,
            alignItems: `center`,
            boxSizing: `border-box`,
            lineHeight: `1`,
            padding: `${theme.spacing[0]} ${theme.spacing[1]}`,
            minWidth: `20px`,
            height: `20px`,
            borderRadius: theme.radius.pill,
            zIndex: `1`,
            transition: `transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
            transformOrigin: `100% 0%`,
            position: 'absolute',
            transform: `scale(1) translate(${translateMap[verticalPos] * 50}%, ${translateMap[horizontalPos] * 50}%)`,
            fontSize: theme.font.size.xs,
            fontWeight: theme.font.weight.medium,
            boxShadow: theme.shadow.level1
        };
    },
    variants: {
        variant: {
            solid: ({ theme }) => ({
                backgroundColor: theme.state.primary.default,
                color: theme.color.text.inverse,
            }),
            outline: ({ theme }) => ({
                backgroundColor: 'transparent',
                color: theme.state.primary.default,
                border: `1px solid ${theme.state.primary.default}`
            })
        }
    },
    concatenatedVariants: [
        {
            variant: {
                anchorOrigin: { vertical: 'top' }
            },
            style: { top: 0 }
        },
        {
            variant: {
                anchorOrigin: { vertical: 'bottom' }
            },
            style: { bottom: 0 }
        },
        {
            variant: {
                anchorOrigin: { vertical: 'center' }
            },
            style: { top: 0, bottom: 0 }
        },
        {
            variant: {
                anchorOrigin: { horizontal: 'left' }
            },
            style: { left: 0 }
        },
        {
            variant: {
                anchorOrigin: { horizontal: 'right' }
            },
            style: { right: 0 }
        },
        {
            variant: {
                anchorOrigin: { horizontal: 'center' }
            },
            style: { left: 0, right: 0 }
        }
    ]
});

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, forwardRef) => {
    const { variant = 'solid', badgeContent, anchorOrigin, children, className, "aria-label": ariaLabel, ...rest } = props;
    const ref = useRef<HTMLSpanElement>(null);
    const mergedRef = useMergedRefs(forwardRef, ref);
    const isHovering = useHover(ref);

    const currentState = getState({
        active: false,
        focused: false,
        hovered: isHovering
    });

    const badgeClasses: BadgeClasses = {
        variant,
        anchorOriginHorizontal: anchorOrigin?.horizontal,
        anchorOriginVertical: anchorOrigin?.vertical,
        hover: isHovering,
        active: false,
        focus: false,
        hidden: false
    };

    const badgeParts = ['badgeContent'];
    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('badge', {
        parts: badgeParts,
        variants: { ...badgeClasses }
    });

    return (
        <ROOT ref={mergedRef} className={names(classes.root, className)} {...rest}>
            {children}
            {badgeContent !== undefined && (
                <LABEL aria-label={ariaLabel ?? badgeContent} anchorOrigin={anchorOrigin} state={currentState} variant={variant} className={names(classes.badgeContent)}>
                    {badgeContent}
                </LABEL>
            )}
        </ROOT>
    );
})
