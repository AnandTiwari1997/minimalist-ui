import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { overlayManager } from '@minimalist-ui/core/overlay/overlayManager';

export function Backdrop() {
    const [top, setTop] = useState(() => overlayManager.getTop());
    const root = document.body;

    useEffect(() => {
        return overlayManager.subscribe(() => {
            setTop(overlayManager.getTop());
        });
    }, []);

    if (!top || !top.backdrop) return null;

    const { backdrop, zIndex, dismissEvents, dismissHandler } = top;

    return ReactDOM.createPortal(
        <div
            className={`overlay-backdrop fixed inset-0`}
            style={{ zIndex: zIndex - 1 }}
            onClick={() => {
                if (!backdrop) return;
                if (dismissEvents.includes('outside-click')) dismissHandler();
            }}
        />,
        root
    );
}
