import type { PositionUpdate } from '@minimalist-ui/core/overlay/types';

import { Overlay } from '@minimalist-ui/core/overlay';
import { styled, type StyledType } from '@minimalist-ui/core/system';
import { useMergedRefs } from '@minimalist-ui/core/utils';
import { forwardRef, useRef, useState } from 'react';

import type { TooltipProps } from './types';

const ToolTipContent = styled<'div', TooltipProps>('div')({
    base: ({ theme }: StyledType<'div', TooltipProps>) => ({
        backgroundColor: theme.color.background.surface,
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadow.level2,
        // border: `1px solid ${theme.color.border.default}`,
        color: theme.color.text.primary,
        fontSize: theme.font.size.xs,
        fontWeight: theme.font.weight.regular,
        padding: `${theme.spacing[1]} ${theme.spacing[2]}`
    }),
    variants: {
        placement: {
            bottom: ({ theme }) => ({
                '::before': {
                    borderColor: `transparent transparent ${theme.color.background.surface} transparent`,
                    borderStyle: `solid`,
                    borderWidth: `6px`,
                    bottom: `100%`,
                    content: "''",
                    height: `0`,
                    left: '50%',
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                    width: `0`
                }
            }),
            left: ({ theme }) => ({
                '::after': {
                    borderColor: `transparent transparent transparent ${theme.color.background.surface}`,
                    borderStyle: `solid`,
                    borderWidth: `6px`,
                    content: "''",
                    height: `0`,
                    left: `100%`,
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: `0`
                }
            }),
            right: ({ theme }) => ({
                '::before': {
                    borderColor: `transparent ${theme.color.background.surface} transparent transparent`,
                    borderStyle: `solid`,
                    borderWidth: `6px`,
                    content: "''",
                    height: `0`,
                    position: 'absolute',
                    right: `100%`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: `0`
                }
            }),
            top: ({ theme }) => ({
                '::after': {
                    borderColor: `${theme.color.background.surface} transparent transparent transparent`,
                    borderStyle: `solid`,
                    borderWidth: `6px`,
                    content: "''",
                    height: `0`,
                    left: '50%',
                    position: 'absolute',
                    top: '100%',
                    transform: 'translateX(-50%)',
                    width: `0`
                }
            })
        }
    }
});

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props: TooltipProps, forwardRef) => {
    const {
        children,
        content,
        disabled = false,
        hidden = false,
        position: initialPosition = { anchor: 'middle', placement: 'bottom' },
        ...rest
    } = props;

    const divRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRefs(forwardRef, divRef);
    const [isVisible, setIsVisible] = useState(false);
    const [placement, setPlacement] = useState(initialPosition);

    const openTooltip = () => {
        if (!disabled && !hidden) {
            setIsVisible(true);
        }
    };

    const closeTooltip = () => {
        setIsVisible(false);
    };

    return (
        <div
            onBlur={closeTooltip}
            onFocus={openTooltip}
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
            ref={mergedRef}
        >
            {children}
            {isVisible && (
                <Overlay
                    allowFocusTrap={false}
                    anchor={divRef.current!}
                    anchorPlacement={initialPosition}
                    backdrop={false}
                    offset={8}
                    onDismiss={closeTooltip}
                    onPositionUpdate={(positionUpdate: PositionUpdate) => setPlacement(positionUpdate.placement)}
                    token={'tooltip'}
                >
                    <ToolTipContent placement={placement.placement} role={'tooltip'} {...rest}>
                        {content}
                    </ToolTipContent>
                </Overlay>
            )}
        </div>
    );
});
