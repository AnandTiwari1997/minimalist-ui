import { Backdrop } from '@minimalist-ui/core/overlay/Backdrop.tsx';
import { createRoot } from 'react-dom/client';
import { isOverlayProviderMounted } from '@minimalist-ui/core/overlay/overlayContext';

let injected = false;

export function ensureBackdrop() {
    if (injected || isOverlayProviderMounted()) return;
    injected = true;

    const div = document.createElement('div');
    div.className = 'overlay-backdrop-fallback';
    document.body.appendChild(div);

    const root = createRoot(div);
    root.render(<Backdrop />);

    if (process.env.NODE_ENV === 'development') {
        console.warn(
            '[Overlay] No BackdropPortal detected. Injecting fallback automatically. ' +
                'For better control, mount <BackdropPortal /> or <OverlayProvider /> in your app root.'
        );
    }
}
