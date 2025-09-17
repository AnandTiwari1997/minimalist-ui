import type { OverlayInstance } from '@minimalist-ui/core/overlay/types';

class OverlayManager {
    private overlays = new Map<string, OverlayInstance>();
    private subscribers: Set<() => void> = new Set();

    register(instance: OverlayInstance) {
        this.overlays.set(instance.id, instance);
        this.updateLayers();
        instance.element.style.position = 'absolute';
        document.body.appendChild(instance.element);
        this.notify();
    }

    unregister(instance: OverlayInstance) {
        if (this.overlays.has(instance.id)) {
            if (instance.element.parentNode) document.body.removeChild(instance.element);
            this.overlays.delete(instance.id);
            this.updateLayers();
            this.notify();
        }
    }

    getTop() {
        return Array.from(this.overlays.values())[this.overlays.size - 1];
    }

    updateLayers() {
        this.overlays.forEach((instance) => {
            instance.element.style.zIndex = String(instance.zIndex);
            instance.element.dataset.active = String(instance === this.getTop());
        });
    }

    subscribe(callback: () => void) {
        this.subscribers.add(callback);
        return () => {
            this.subscribers.delete(callback);
        };
    }

    private notify() {
        for (const subscriber of this.subscribers) subscriber();
    }

    handleEsc() {
        const top = this.getTop();
        if (top && top.dismissEvents.includes('esc')) top.dismissHandler();
    }
}

export const overlayManager = new OverlayManager();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlayManager.handleEsc();
});
