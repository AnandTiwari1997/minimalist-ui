import { useRef } from 'react';
import { useFocusTrap } from '@minimalist-ui/core/hooks/useFocusTrap';
import type { FocusTrapProps } from '@minimalist-ui/core/components/primitive/focusTrap/types';

export function FocusTrap(props: FocusTrapProps) {
    const { active = true, children } = props;

    const containerRef = useRef<HTMLDivElement>(document.createElement('div'));

    useFocusTrap(containerRef, active);

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}