import { styled } from '@minimalist-ui/core/system';
import { type CommonClasses, names, getRippleStyle, useGenerateClasses, useRipple } from '@minimalist-ui/core';
import type { RippleProps } from '@minimalist-ui/core/components/ripple/types';
import React, { useEffect, useRef, useState } from 'react';

const RippleContainer = styled<'div', RippleProps>('div')({
    base: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});

const RippleSpan = styled<'span', RippleProps>('span')({});

export const Ripple = (props: RippleProps) => {
    const {
        rippleDuration = 200,
        rippleColor = 'currentColor',
        type = 'wave',
        opacity = 0.4,
        className,
        ...rest
    } = props;
    const { ripples, createRipple } = useRipple(rippleDuration);

    const [style, setStyle] = useState<React.CSSProperties>({});
    const divRef = useRef<HTMLDivElement>(null);

    const rippleClasses: CommonClasses = {
        active: ripples.length > 0
    };

    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('ripple', {
        variants: { ...rippleClasses }
    });

    useEffect(() => {
        setStyle({ ...style, ...getRippleStyle(props, divRef.current!) });
    }, [type, rippleColor, opacity]);

    return (
        <RippleContainer
            ref={divRef}
            onMouseDown={createRipple}
            className={names(classes.root, classes.active, className)}
            {...rest}
        >
            {ripples.length > 0 &&
                ripples.map((ripple) => {
                    return (
                        <RippleSpan
                            className={'absolute rounded-full no-pointer-events'}
                            key={'ripple_' + ripple.key}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                                ...style
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
};
