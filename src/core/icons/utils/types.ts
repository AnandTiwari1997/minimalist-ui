import React from 'react';

export interface IconDefinition {
    displayName: string;
    viewBox: string;
    paths: {
        outline?: React.ReactElement;
        solid?: React.ReactElement;
    };
}

export function isReactElement(value: unknown): value is React.ReactElement {
    return React.isValidElement(value);
}

export function isIconDefinition(value: unknown): value is IconDefinition {
    return (
        typeof value === 'object' && value !== null && 'displayName' in value && 'viewBox' in value && 'paths' in value
    );
}
