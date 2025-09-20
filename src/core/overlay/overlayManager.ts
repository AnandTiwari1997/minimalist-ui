import type { OverlayInstance } from '@minimalist-ui/core/overlay/types';

/**
 * Manages overlay instances, handling registration, unregistration, layer updates, and event notifications.
 */
class OverlayManager {
    private overlays = new Map<string, OverlayInstance>();
    private subscribers: Set<() => void> = new Set();

    /**
 * Registers an overlay instance, appends its element to the document body, updates layers, and notifies subscribers.
 * @param {OverlayInstance} instance - The overlay instance to register.
 */
    register(instance: OverlayInstance) {
        this.overlays.set(instance.id, instance);
        this.updateLayers();
        instance.element.style.position = 'absolute';
        document.body.appendChild(instance.element);
        this.notify();
    }

    /**
 * Unregisters an overlay instance, removes its element from the document body, updates layers, and notifies subscribers.
 * @param {OverlayInstance} instance - The overlay instance to unregister.
 */
    unregister(instance: OverlayInstance) {
        if (this.overlays.has(instance.id)) {
            if (instance.element.parentNode) document.body.removeChild(instance.element);
            this.overlays.delete(instance.id);
            this.updateLayers();
            this.notify();
        }
    }

    /**
 * Returns the topmost overlay instance in the stack.
 * @returns {OverlayInstance | undefined} The topmost overlay instance, or undefined if no overlays are registered.
 */
    getTop() {
        return Array.from(this.overlays.values())[this.overlays.size - 1];
    }

    /**
 * Updates the z-index and active state of all registered overlay instances based on their position in the stack.
 */
    updateLayers() {
        this.overlays.forEach((instance) => {
            instance.element.style.zIndex = String(instance.zIndex);
            instance.element.dataset.active = String(instance === this.getTop());
        });
    }

    /**
 * Subscribes a callback function to receive notifications when overlays are added or removed.
 * @param {() => void} callback - The callback function to subscribe.
 * @returns {() => void} A function that unsubscribes the callback.
 */
    subscribe(callback: () => void) {
        this.subscribers.add(callback);
        return () => {
            this.subscribers.delete(callback);
        };
    }

    /**
 * Notifies all subscribed callback functions of changes to the overlay stack.
 */
    private notify() {
        for (const subscriber of this.subscribers) subscriber();
    }

    /**
     * Handles the 'Escape' key event, dismissing the topmost overlay if it is configured to do so.
     */
    handleEsc() {
        const top = this.getTop();
        if (top && top.dismissEvents.includes('esc')) top.dismissHandler();
    }
}

export const overlayManager = new OverlayManager();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlayManager.handleEsc();
});
