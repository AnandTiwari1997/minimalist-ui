import { useState, useEffect, useCallback, type RefObject } from 'react';
import type { AnchorPlacement } from '@minimalist-ui/core/overlay/types';

interface PositionOptions {
    placement?: AnchorPlacement;
    offset?: number;
    operations?: ('flip' | 'shift' | 'arrow')[];
}

/**
 * Custom React hook to calculate and manage the positioning of an overlay element relative to an anchor element.
 * @param {RefObject<HTMLElement>} overlayRef - Reference to the overlay element.
 * @param {HTMLElement | null} anchorElement - The anchor element to which the overlay is positioned.
 * @param {{ placement?: 'top' | 'bottom' | 'left' | 'right'; offset?: number; strategy?: ('flip' | 'shift')[]; }} options - Options for positioning and behavior of the overlay.
 * @param {boolean} autoUpdate - Whether to automatically update the position when window resize or scroll events occur, or when the size of the overlay element changes.
 * @returns {{ coords: { top: number; left: number; placement: 'top' | 'bottom' | 'left' | 'right'; } }} An object containing the calculated coordinates and final placement of the overlay.
 */
export function usePosition(
    overlayRef: RefObject<HTMLElement>,
    anchorElement: HTMLElement | null,
    { placement = { placement: 'bottom', anchor: 'start' }, offset = 8, operations = ['flip'] }: PositionOptions,
    autoUpdate?: boolean
) {
    const [coords, setCoords] = useState<{ top: number; left: number; placement: AnchorPlacement }>({
        top: 0,
        left: 0,
        placement
    });

    const findPosition = useCallback(async () => {
        const overlayEl = overlayRef.current;
        if (!overlayEl || !anchorElement) return { top: 0, left: 0, placement };

        return new Promise<{ top: number; left: number; placement: AnchorPlacement }>((resolve) => {
            requestAnimationFrame(() => {
                const rect = anchorElement.getBoundingClientRect();
                const { innerWidth, innerHeight } = window;

                let top = 0,
                    left = 0;
                // let finalPlacement: Placement = placement;

                // if (placement === 'bottom') {
                //     top = rect.bottom + offset + window.scrollY;
                //     left = rect.left + window.scrollX;
                //     if (operations.includes('flip') && rect.bottom + overlayEl.offsetHeight > innerHeight) {
                //         top = rect.top - overlayEl.offsetHeight - offset + window.scrollY;
                //         finalPlacement = 'top';
                //     }
                //     if (operations.includes('shift') && left + overlayEl.offsetWidth > innerWidth) {
                //         left = innerWidth - overlayEl.offsetWidth - offset;
                //     }
                // }

                // if (placement === 'top') {
                //     top = rect.top - overlayEl.offsetHeight - offset + window.scrollY;
                //     left = rect.left + window.scrollX;
                //     if (operations.includes('flip') && top < 0) {
                //         top = rect.bottom + offset + window.scrollY;
                //         finalPlacement = 'bottom';
                //     }
                //     if (operations.includes('shift') && left + overlayEl.offsetWidth > innerWidth) {
                //         left = innerWidth - overlayEl.offsetWidth - offset;
                //     }
                // }

                // if (placement === 'right') {
                //     top = rect.top + window.scrollY;
                //     left = rect.right + offset + window.scrollX;
                //     if (operations.includes('flip') && rect.right + overlayEl.offsetWidth > innerWidth) {
                //         left = rect.left - overlayEl.offsetWidth - offset + window.scrollX;
                //         finalPlacement = 'left';
                //     }
                    // if (operations.includes('shift') && top + overlayEl.offsetHeight > innerHeight) {
                    //     top = innerHeight - overlayEl.offsetHeight - offset;
                    // }
                // }

                // if (placement === 'left') {
                //     top = rect.top + window.scrollY;
                //     left = rect.left - overlayEl.offsetWidth - offset + window.scrollX;
                //     if (operations.includes('flip') && left < 0) {
                //         left = rect.right + offset + window.scrollX;
                //         finalPlacement = 'right';
                //     }
                //     if (operations.includes('shift') && top + overlayEl.offsetHeight > innerHeight) {
                //         top = innerHeight - overlayEl.offsetHeight - offset;
                //     }
                // }

                let finalPlacement: AnchorPlacement = placement;

                if (finalPlacement.placement === 'top') {
                    top = rect.top - overlayEl.offsetHeight + window.scrollY;
                    if (finalPlacement.anchor  === 'start') {
                    left = rect.left + window.scrollX;
                    } else if (finalPlacement.anchor  === 'middle') {
                        left = rect.left + rect.width / 2 - overlayEl.offsetWidth / 2 + window.scrollX;
                    } else if (finalPlacement.anchor  === 'end') {
                        left = rect.right - overlayEl.offsetWidth + window.scrollX;
                    }
                    if (operations.includes('shift')) {
                        top = top - offset;
                    }
                    if (operations.includes('flip') && top < 0) {
                        top = rect.bottom + window.scrollY;
                        finalPlacement = {
                            placement: 'bottom',
                            anchor: finalPlacement.anchor
                        };
                    }
                }

                if (finalPlacement.placement === 'bottom') {
                    top = rect.bottom + window.scrollY;
                    if (finalPlacement.anchor  === 'start') {
                    left = rect.left + window.scrollX;
                    } else if (finalPlacement.anchor  === 'middle') {
                        left = rect.left + rect.width / 2 - overlayEl.offsetWidth / 2 + window.scrollX;
                    } else if (finalPlacement.anchor  === 'end') {
                        left = rect.right - overlayEl.offsetWidth + window.scrollX;
                    }
                    if (operations.includes('shift')) {
                        top = top + offset;
                    }
                    if (operations.includes('flip') && rect.bottom + overlayEl.offsetHeight > innerHeight) {
                        top = rect.top - overlayEl.offsetHeight + window.scrollY;
                        finalPlacement = {
                            placement: 'top',
                            anchor: finalPlacement.anchor
                        };
                    }
                }

                if (finalPlacement.placement === 'left') {
                    left = rect.left - overlayEl.offsetWidth + window.scrollX;
                    if (finalPlacement.anchor  === 'start') {
                    top = rect.top + window.scrollY;
                    } else if (finalPlacement.anchor  === 'middle') {
                        top = rect.top + rect.height / 2 - overlayEl.offsetHeight / 2 + window.scrollY;
                    } else if (finalPlacement.anchor  === 'end') {
                        top = rect.bottom - overlayEl.offsetHeight + window.scrollY;
                    }
                    if (operations.includes('shift')) {
                        left = left - offset;
                    }
                    if (operations.includes('flip') && left < 0) {
                        left = rect.right + window.scrollX;
                        finalPlacement = {
                            placement: 'right',
                            anchor: finalPlacement.anchor
                        };
                    }
                }

                if (finalPlacement.placement === 'right') {
                    left = rect.right + window.scrollX;
                    if (finalPlacement.anchor  === 'start') {
                    top = rect.top + window.scrollY;
                    } else if (finalPlacement.anchor  === 'middle') {
                        top = rect.top + rect.height / 2 - overlayEl.offsetHeight / 2 + window.scrollY;
                    } else if (finalPlacement.anchor  === 'end') {
                        top = rect.bottom - overlayEl.offsetHeight + window.scrollY;
                    }
                    if (operations.includes('shift')) {
                        left = left + offset;
                    }
                    if (operations.includes('flip') && rect.right + overlayEl.offsetWidth > innerWidth) {
                        left = rect.left - overlayEl.offsetWidth + window.scrollX;
                        finalPlacement = {
                            placement: 'left',
                            anchor: finalPlacement.anchor
                        };
                    }
                }

                resolve({ top, left, placement: finalPlacement });
            });
        });
    }, [overlayRef, anchorElement, placement, offset, operations]);

    useEffect(() => {
        let mounted = true;
        const update = () => {
            findPosition().then((pos) => {
                if (mounted) setCoords(pos);
            });
        };
        update();
        if (!autoUpdate) return;

        window.addEventListener('resize', update);
        window.addEventListener('scroll', update, true);
        const resizeObserver = new ResizeObserver(update);
        if (overlayRef.current) resizeObserver.observe(overlayRef.current);

        return () => {
            mounted = false;
            window.removeEventListener('resize', update);
            window.removeEventListener('scroll', update, true);
            resizeObserver.disconnect();
        };
    }, [findPosition, autoUpdate]);

    return { coords };
}
