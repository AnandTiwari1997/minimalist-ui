/** Indicates whether an overlay provider is currently mounted. */
let hasOverlayProvider = false;

/** Marks that an overlay provider has been mounted. */
export function markOverlayProviderMounted() {
    hasOverlayProvider = true;
}

/** Marks that the overlay provider has been unmounted. */
export function markOverlayProviderUnmounted() {
    hasOverlayProvider = false;
}

/** Checks if an overlay provider is currently mounted.
 * @returns {boolean} True if an overlay provider is mounted, false otherwise.
 */
export function isOverlayProviderMounted() {
    return hasOverlayProvider;
}