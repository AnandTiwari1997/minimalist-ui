import React, { useEffect } from 'react';
import { Backdrop } from '@minimalist-ui/core/overlay/Backdrop';
import { markOverlayProviderMounted, markOverlayProviderUnmounted } from '@minimalist-ui/core/overlay/overlayContext';

export function OverlayProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        markOverlayProviderMounted();
        return () => markOverlayProviderUnmounted();
    }, []);

    return (
        <>
            <Backdrop />
            {children}
        </>
    );
}
