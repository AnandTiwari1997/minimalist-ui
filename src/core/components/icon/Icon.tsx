import type { IconClasses, IconProps } from '@minimalist-ui/core/components/icon/types';
import { forwardRef } from 'react';
import { names, styled, type StyledType, toPx, useGenerateClasses, useIconLookup } from '@minimalist-ui/core';

const IconRoot = styled<'svg', IconProps>('svg')({
    base: ({ theme }: StyledType<'svg', IconProps>) => ({
        color: 'currentcolor',
        ':disabled': {
            color: theme.color.text.disabled
        }
    }),
    variants: {
        variant: {
            outline: ({ strokeWidth }) => ({
                strokeWidth: strokeWidth
            })
        },
        size: {
            sm: {
                height: toPx(16),
                width: toPx(16)
            },
            md: {
                height: toPx(20),
                width: toPx(20)
            },
            lg: {
                height: toPx(24),
                width: toPx(24)
            },
            xl: {
                height: toPx(32),
                width: toPx(32)
            }
        }
    }
});

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
    const {
        icon,
        name,
        variant = 'outline',
        size = 'md',
        className,
        style,
        color,
        hidden,
        disabled,
        'aria-label': ariaLabel,
        ...rest
    } = props;

    const iconDef = useIconLookup(icon || name);

    if (!iconDef) {
        console.warn(`Icon "${icon}" not found in lookup.`);
        return <></>;
    }

    const path = iconDef.paths[variant];
    const labelled = Boolean(ariaLabel);
    const a11yProps = labelled ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true };

    const iconClasses: IconClasses = {
        size,
        variant,
        hidden,
        disabled
    };
    const utilityClasses = useGenerateClasses();
    const classes = utilityClasses('icon', { variants: { ...iconClasses } });

    return (
        <IconRoot
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={names(
                classes.base,
                classes.root,
                classes.size,
                classes.variant,
                classes.hidden,
                classes.disabled,
                className
            )}
            size={size}
            variant={variant}
            {...a11yProps}
            {...rest}
        >
            {path}
        </IconRoot>
    );
});
