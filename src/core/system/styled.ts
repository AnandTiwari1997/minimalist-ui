import type { NativeElementKeys } from '@minimalist-ui/core/system/types';
import type { JSX } from 'react/jsx-runtime';

import { splitProps, type StyledType } from '@minimalist-ui/core/system';
import { createClass } from '@minimalist-ui/core/system/stylesheet';
import { responsive, type Theme, useTheme } from '@minimalist-ui/core/theme';
import React, { type CSSProperties, type ReactNode, useMemo } from 'react';
import type { PseudoSelector } from '@minimalist-ui/core';

export type StyledFn<T extends NativeElementKeys, P> = ((props: StyledType<T, P>) => StyleProps) | StyleProps;

type Combinator = '~' | '>' | '+' | ' ';

export interface StyledFnInput<T extends NativeElementKeys, P> {
    base?: StyledFn<T, P>;
    variantOrder?: string[];
    variants?: Record<string, Record<string, StyledFn<T, P>>>;
    concatenatedVariants?: {
        variant: { [key in keyof P]: string | boolean | number | undefined };
        style: StyledFn<T, P>;
    }[];
}

// type StyledComponent<P = any> = React.FC<P> & { __className?: string };

export type StyledProps<T extends keyof JSX.IntrinsicElements, P> = {
    children?: ReactNode;
    css?: CSSProperties;
    disabled?: boolean;
} & JSX.IntrinsicElements[T] &
    P &
    StyleProps;

export type StyleProps = Partial<CSSProperties> & {
    [K in PseudoSelector]?: StyleProps;
} & {
    '&'?: { [K in Combinator]?: { ref: string | StyledComponent<any, any>; style: StyleProps }[] };
};

type StyledComponent<T extends NativeElementKeys, P> = {
    (props: StyledProps<T, P>): React.ReactElement<
        {
            className: string;
        },
        string | React.JSXElementConstructor<any>
    >;
    __className: string;
};

type Tag = NativeElementKeys | StyledComponent<any, any> | React.FunctionComponent;

function validatePropCondition<P>(
    propConditions: { [key in keyof P]: string | boolean | number | undefined },
    props: P
) {
    if (Object.keys(propConditions).length === 0) return false;
    let shouldApply = true;
    for (const key in propConditions) {
        const actualPropValue = props[key] || undefined;
        const expectedPropValue = propConditions[key];
        shouldApply = shouldApply && actualPropValue === expectedPropValue && true;
    }
    return shouldApply;
}

export function styled<T extends Tag, P extends {} = {}>(tag: T) {
    return (inputs: StyledFnInput<any, P> = {}) => {
        const variantOverrides = inputs.variantOrder ?? Object.keys(inputs.variants ?? {});
        const concatenatedVariantsOverride = (inputs.concatenatedVariants || []).flatMap((concatenatedVariant) =>
            Object.keys(concatenatedVariant.variant)
        );
        const allRelevantPropKeys = [...new Set([...variantOverrides, ...concatenatedVariantsOverride])];
        const StyledComponent = (props: StyledProps<any, P>) => {
            const { children, className = '', css, ...rest } = props;
            const theme = useTheme().theme;
            const { domProps, styleProps } = splitProps(rest, theme);

            const generatedClassName = useMemo(() => {
                let baseStyle =
                    typeof inputs.base === 'function' ? inputs.base({ theme, ...(rest as P) }) : inputs.base;

                const allVariantStyles = variantOverrides
                    .map((variantOverride) => {
                        const objectOrFn = inputs.variants?.[variantOverride];
                        return applyVariantsStyle(variantOverride as keyof StyledFn<any, P>, objectOrFn, props, theme);
                    })
                    .filter(Boolean);

                const allConcatenatedVariantStyles = (inputs.concatenatedVariants || [])
                    .map((concatenatedVariant) => {
                        const conditionalProps = concatenatedVariant.variant;
                        const style = concatenatedVariant.style;
                        if (validatePropCondition<P>(conditionalProps, props)) {
                            return typeof style === 'function' ? style({ theme, ...(props as P) }) : style;
                        }
                    })
                    .filter(Boolean);

                const rawStyles = mergeStyles(
                    baseStyle,
                    ...allVariantStyles,
                    ...allConcatenatedVariantStyles,
                    css ?? {},
                    styleProps
                );
                const { rawCSS, rawMediaQueryCSS, rawPseudoCSS } = getStyleComponents(rawStyles);

                if (':disabled' in rawPseudoCSS) {
                    const disabled = rawPseudoCSS[':disabled'];
                    delete rawPseudoCSS[':disabled'];
                    rawPseudoCSS[':disabled'] = disabled;
                }

                return createClass(responsive(rawCSS), responsive(rawPseudoCSS), responsive(rawMediaQueryCSS));
            }, [theme, className, JSON.stringify(css), ...allRelevantPropKeys.map((key) => props[key as keyof P])]);

            StyledComponent.__className = generatedClassName;
            const finalClassName = [generatedClassName, className].filter(Boolean).join(' ').trim();
            const finalProps = { className: finalClassName, ...domProps };
            return React.createElement<P>(tag, finalProps as unknown as P, children);
        };
        StyledComponent.__className = undefined as unknown as string;
        return StyledComponent;
    };
}

function applyVariantsStyle<T extends NativeElementKeys, P = {}>(
    key: keyof StyledFn<T, P>,
    objectOrFn: Record<string, StyledFn<T, P>> | undefined,
    props: StyledProps<T, P>,
    theme: Theme
): StyleProps | undefined {
    if (objectOrFn) {
        const propValue: StyleProps | undefined = props[key];
        if (propValue) {
            if (propValue in objectOrFn) {
                const propObjectOrFn: any =
                    objectOrFn[propValue as keyof (Partial<CSSProperties> | Record<string, StyledFn<T, P>>)];
                return typeof propObjectOrFn === 'function'
                    ? propObjectOrFn({ theme, ...(props as P) })
                    : propObjectOrFn;
            }
        }
    }
    return undefined;
}

function getStyleComponents(rawStyles: CSSProperties) {
    const rawCSS: { [key: string]: any } = {};
    const rawPseudoCSS: { [key: string]: any } = {};
    const rawMediaQueryCSS: { [key: string]: any } = {};
    for (let propertyKey in rawStyles) {
        propertyKey = propertyKey as keyof CSSProperties;
        if (propertyKey.startsWith(':') || propertyKey.startsWith('&:')) {
            rawPseudoCSS[propertyKey] = rawStyles[propertyKey as keyof CSSProperties];
        } else if (propertyKey.startsWith('@')) {
            rawMediaQueryCSS[propertyKey] = rawStyles[propertyKey as keyof CSSProperties];
        } else {
            rawCSS[propertyKey] = rawStyles[propertyKey as keyof CSSProperties];
        }
    }
    return { rawCSS, rawMediaQueryCSS, rawPseudoCSS };
}

function mergeStyles(...styles: (StyleProps | undefined)[]) {
    const merged: { [key: string]: any } = {};

    for (const style of styles) {
        if (!style) continue;

        for (const key in style) {
            const typedKey = key as keyof StyleProps;
            const mergedValue = merged[typedKey];
            const styleValue = style[typedKey];
            if (
                (key.startsWith(':') || key.startsWith('&:') || key.startsWith('@')) &&
                typeof mergedValue === 'object' &&
                mergedValue !== null &&
                !Array.isArray(mergedValue) &&
                typeof styleValue === 'object' &&
                styleValue !== null &&
                !Array.isArray(styleValue)
            ) {
                merged[typedKey] = { ...mergedValue, ...styleValue };
            } else {
                merged[typedKey] = styleValue;
            }
        }
    }
    return merged;
}

export function styledV2<T extends NativeElementKeys, P = {}>(tag: T) {
    return (inputs: StyledFnInput<T, P>) => {
        const theme = useTheme().theme;

        const variantOverrides = inputs.variantOrder ?? Object.keys(inputs.variants ?? {});

        const staticClasses: Record<string, string> = {};
        const dynamicStyles: Record<string, StyledFn<T, P>> = {};

        // helper: compile if static
        function register(key: string, style: StyledFn<T, P>) {
            try {
                const rawStyles = inputs.base
                    ? typeof inputs.base === 'function'
                        ? inputs.base({ theme, ...({} as P) })
                        : inputs.base
                    : {};
                const { rawCSS, rawMediaQueryCSS, rawPseudoCSS } = getStyleComponents(rawStyles as CSSProperties);
                staticClasses[key] = createClass(
                    responsive(rawCSS),
                    responsive(rawPseudoCSS),
                    responsive(rawMediaQueryCSS)
                );
            } catch (e) {
                dynamicStyles[key] = style;
            }
        }

        // base
        if (inputs.base) {
            register('base', inputs.base);
        }

        // variants
        if (inputs.variants) {
            for (const variantOverride in variantOverrides) {
                const options: Record<string, StyledFn<T, P>> = inputs.variants[variantOverride];
                for (const optionKey in options) {
                    register(`${variantOverride}:${optionKey}`, options[optionKey as keyof typeof options]);
                }
            }
        }

        return (props: StyledProps<T, P>) => {
            const { children, className = '', css, ...rest } = props;
            const { domProps, styleProps } = splitProps(rest, theme);

            const finalClassName = useMemo(() => {
                const classes: string[] = [];

                let baseStyle = {};
                if (staticClasses.base) {
                    classes.push(staticClasses.base);
                } else if (dynamicStyles.base) {
                    baseStyle =
                        typeof dynamicStyles.base === 'function'
                            ? dynamicStyles.base({ theme, ...(rest as P) })
                            : dynamicStyles.base;
                }

                const allVariantStyles = variantOverrides
                    .map((variantOverride) => {
                        const propVal = props[variantOverride as keyof StyledProps<T, P>];
                        if (propVal != null) {
                            const key = `${variantOverride}:${propVal}`;
                            if (staticClasses[key]) {
                                classes.push(staticClasses[key]);
                            } else if (dynamicStyles[key]) {
                                const objectOrFn = inputs.variants?.[variantOverride];
                                return applyVariantsStyle(
                                    variantOverride as keyof StyledFn<T, P>,
                                    objectOrFn,
                                    props,
                                    theme
                                );
                            }
                        }
                    })
                    .filter(Boolean);

                const rawStyles = mergeStyles(baseStyle, ...(allVariantStyles ?? []), css ?? {}, styleProps);
                const { rawCSS, rawMediaQueryCSS, rawPseudoCSS } = getStyleComponents(rawStyles);

                if (':disabled' in rawPseudoCSS) {
                    const disabled = rawPseudoCSS[':disabled'];
                    delete rawPseudoCSS[':disabled'];
                    rawPseudoCSS[':disabled'] = disabled;
                }

                return [
                    ...classes,
                    createClass(responsive(rawCSS), responsive(rawPseudoCSS), responsive(rawMediaQueryCSS)),
                    className
                ]
                    .join(' ')
                    .trim();
            }, [
                theme,
                className,
                JSON.stringify(css),
                JSON.stringify(styleProps),
                ...variantOverrides.map((key) => props[key as keyof P])
            ]);

            const finalProps = { className: finalClassName, ...domProps };
            return React.createElement(tag, finalProps, children);
        };
    };
}
