import { useState, useEffect, useCallback, type RefObject } from 'react';

type Placement = 'top' | 'bottom' | 'left' | 'right';

interface PositionOptions {
    placement?: Placement;
    offset?: number;
    strategy?: ('flip' | 'shift')[];
}

export function usePosition(
    overlayRef: RefObject<HTMLElement>,
    anchorElement: HTMLElement | null,
    { placement = 'bottom', offset = 8, strategy = ['flip'] }: PositionOptions,
    autoUpdate?: boolean
) {
    const [coords, setCoords] = useState<{ top: number; left: number; placement: Placement }>({
        top: 0,
        left: 0,
        placement
    });

    const findPosition = useCallback(async () => {
        const overlayEl = overlayRef.current;
        if (!overlayEl || !anchorElement) return { top: 0, left: 0, placement };

        return new Promise<{ top: number; left: number; placement: Placement }>((resolve) => {
            requestAnimationFrame(() => {
                const rect = anchorElement.getBoundingClientRect();
                const { innerWidth, innerHeight } = window;

                let top = 0,
                    left = 0;
                let finalPlacement: Placement = placement;

                if (placement === 'bottom') {
                    top = rect.bottom + offset + window.scrollY;
                    left = rect.left + window.scrollX;
                    if (strategy.includes('flip') && rect.bottom + overlayEl.offsetHeight > innerHeight) {
                        top = rect.top - overlayEl.offsetHeight - offset + window.scrollY;
                        finalPlacement = 'top';
                    }
                    if (strategy.includes('shift') && left + overlayEl.offsetWidth > innerWidth) {
                        left = innerWidth - overlayEl.offsetWidth - offset;
                    }
                }

                if (placement === 'top') {
                    top = rect.top - overlayEl.offsetHeight - offset + window.scrollY;
                    left = rect.left + window.scrollX;
                    if (strategy.includes('flip') && top < 0) {
                        top = rect.bottom + offset + window.scrollY;
                        finalPlacement = 'bottom';
                    }
                    if (strategy.includes('shift') && left + overlayEl.offsetWidth > innerWidth) {
                        left = innerWidth - overlayEl.offsetWidth - offset;
                    }
                }

                if (placement === 'right') {
                    top = rect.top + window.scrollY;
                    left = rect.right + offset + window.scrollX;
                    if (strategy.includes('flip') && rect.right + overlayEl.offsetWidth > innerWidth) {
                        left = rect.left - overlayEl.offsetWidth - offset + window.scrollX;
                        finalPlacement = 'left';
                    }
                    if (strategy.includes('shift') && top + overlayEl.offsetHeight > innerHeight) {
                        top = innerHeight - overlayEl.offsetHeight - offset;
                    }
                }

                if (placement === 'left') {
                    top = rect.top + window.scrollY;
                    left = rect.left - overlayEl.offsetWidth - offset + window.scrollX;
                    if (strategy.includes('flip') && left < 0) {
                        left = rect.right + offset + window.scrollX;
                        finalPlacement = 'right';
                    }
                    if (strategy.includes('shift') && top + overlayEl.offsetHeight > innerHeight) {
                        top = innerHeight - overlayEl.offsetHeight - offset;
                    }
                }

                resolve({ top, left, placement: finalPlacement });
            });
        });
    }, [overlayRef, anchorElement, placement, offset, strategy]);

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
