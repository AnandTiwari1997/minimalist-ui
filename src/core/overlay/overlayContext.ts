import { createContext, useContext } from 'react';

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

export const OverlayContext = createContext(null);

export const useOverlayContext = () => {
  const ctx = useContext(OverlayContext);
  if (!ctx) {
    throw new Error('useOverlayContext must be used inside an <OverlayProvider>');
  }
  return ctx;
};

