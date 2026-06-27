import { useLayoutEffect, useRef } from 'react';

export const useAnimateList = () => {
    const containerRef = useRef(null);
    const positionsRef = useRef(new Map());

    // Called manually right BEFORE Redux state changes
    const prepareFlip = () => {
        if (!containerRef.current) return;
        const children = containerRef.current.children;

        positionsRef.current.clear();
        for (const child of children) {
            const id = child.getAttribute('data-id');
            if (id) {
                // Capture the true "FIRST" position
                positionsRef.current.set(id, child.getBoundingClientRect());
            }
        }
    };

    // LAST, INVERT, PLAY: Animate delta shifts via WAAPI compositor
    useLayoutEffect(() => {
        if (!containerRef.current || positionsRef.current.size === 0) return;
        const children = containerRef.current.children;

        for (const child of children) {
            const id = child.getAttribute('data-id');
            if (!id) continue;

            const firstRect = positionsRef.current.get(id);
            if (!firstRect) continue;

            // Capture the true "LAST" position
            const lastRect = child.getBoundingClientRect();
            const deltaY = firstRect.top - lastRect.top;
            const deltaX = firstRect.left - lastRect.left;

            // This will now show actual numbers instead of 0!
            if (deltaY !== 0 || deltaX !== 0) {
                // compound movement and fade pipeline
                child.animate(
                    [
                        {
                            transform: `translate(${deltaX}px, ${deltaY}px)`,
                            opacity: 1, // Start fully visible at old location
                        },
                        {
                            transform: `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px)`,
                            opacity: 0.4, // Mid-flight: fade out subtly to look like a shuffle layer
                        },
                        {
                            transform: 'translate(0px, 0px)',
                            opacity: 1, // Landing: Fade back to crisp focus state
                        },
                    ],
                    {
                        duration: 1000, // 1000 = 1s
                        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                        fill: 'none',
                    }
                );
            }
        }

        // Clear tracking cache after animating
        positionsRef.current.clear();
    }); // Runs after every DOM commit phase

    return { containerRef, prepareFlip };
};
