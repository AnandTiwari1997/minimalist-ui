let hasOverlayProvider = false;

export function markOverlayProviderMounted() {
    hasOverlayProvider = true;
}

export function markOverlayProviderUnmounted() {
    hasOverlayProvider = false;
}

export function isOverlayProviderMounted() {
    return hasOverlayProvider;
}
