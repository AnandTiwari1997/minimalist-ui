import type { Theme } from '@minimalist-ui/core';
import type { JSX } from 'react/jsx-runtime';

export type NativeElementKeys = keyof JSX.IntrinsicElements;

export type StyledType<T extends NativeElementKeys, P> = { theme: Theme } & JSX.IntrinsicElements[T] & P;
