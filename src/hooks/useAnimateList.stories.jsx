import { useState } from 'react';
import { useAnimateList } from './useAnimateList';
import { expect, fn, within, userEvent, spyOn, waitFor } from 'storybook/test';
import { Button } from '../components';

export default {
    title: 'Hooks/useAnimateList',
    parameters: {
        // Exclude this test harness story from your production sidebar docs if needed
        chromatic: { disableSnapshot: true },
    },
};

// CREATE A TEST HARNESS COMPONENT
// This renders a minimal DOM list layout to satisfy the hook's requirements
const HookHarness = ({ onAnimateSpy }) => {
    const { containerRef, prepareFlip } = useAnimateList();

    // Simple state toggle to force a re-render and reorder items
    const [isSwapped, setIsSwapped] = useState(false);

    const handleClick = () => {
        prepareFlip(); // Trigger phase 1 of FLIP
        setIsSwapped(!isSwapped); // Force Redux-style layout shift
    };

    const taskBarStyle = {
        width: '80vw',
        padding: '0.75rem',
        borderTop: '1px solid oklch(91% 0.05 208deg)',
        backgroundColor: 'oklch(98% 0.01 208deg',
    };

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'flex-start',
            }}
        >
            <Button
                data-testid='trigger-btn'
                onClick={handleClick}
                label={'Shuffle Tasks'}
                size={'medium'}
                style={{ marginTop: '2rem' }}
            />

            {/* the target container node hook attaches to */}
            <div ref={containerRef} data-testid='list-container'>
                {isSwapped ?
                    <>
                        <div key='2' data-id='2' data-testid='item-2' style={taskBarStyle}>
                            task 2
                        </div>
                        <div key='1' data-id='1' data-testid='item-1' style={taskBarStyle}>
                            task 1
                        </div>
                    </>
                :   <>
                        <div key='1' data-id='1' data-testid='item-1' style={taskBarStyle}>
                            task 1
                        </div>
                        <div key='2' data-id='2' data-testid='item-2' style={taskBarStyle}>
                            task 2
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

// THE STORY
export const TestAnimationCoverage = {
    render: args => <HookHarness {...args} />,
    args: {
        onAnimateSpy: fn(),
    },

    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // 1. Hook into the native web animation engine
        const animateSpy = spyOn(Element.prototype, 'animate');

        // 2. Persistent Mock: Look directly at the live DOM tree structure
        const rectSpy = spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function () {
            const id = this.getAttribute('data-id');
            const parent = this.parentElement;

            if (!parent || !id) {
                return { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 };
            }

            // Dynamically find where this specific node currently sits in the DOM array tree
            const childrenArray = Array.from(parent.children);
            const currentDOMIndex = childrenArray.indexOf(this);

            // If it is the first element in the DOM list, give it the top position (100)
            // If it is the second element, give it the lower position (150)
            const targetTop = currentDOMIndex === 0 ? 100 : 150;

            return { top: targetTop, left: 0, bottom: 0, right: 0, width: 100, height: 50 };
        });

        const triggerButton = canvas.getByTestId('trigger-btn');

        // 3. Click the element. The layout map keeps everything aligned automatically.
        await userEvent.click(triggerButton);

        // 4. Assertions run smoothly because our layout-aware math always computes clean deltas.
        expect(animateSpy).toHaveBeenCalledTimes(2);

        // 5. Extract calls for order-independent checking
        const actualAnimationCalls = animateSpy.mock.calls.map(call => call[0]);

        const card1Keyframes = [
            { opacity: 1, transform: 'translate(0px, 50px)' },
            { opacity: 0.4, transform: 'translate(0px, 25px)' },
            { opacity: 1, transform: 'translate(0px, 0px)' },
        ];

        const card2Keyframes = [
            { opacity: 1, transform: 'translate(0px, -50px)' },
            { opacity: 0.4, transform: 'translate(0px, -25px)' },
            { opacity: 1, transform: 'translate(0px, 0px)' },
        ];

        expect(actualAnimationCalls).toContainEqual(card1Keyframes);
        expect(actualAnimationCalls).toContainEqual(card2Keyframes);

        // 6. Verify identical options blocks
        const expectedOptions = {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            fill: 'none',
        };

        animateSpy.mock.calls.forEach(call => {
            expect(call[1]).toEqual(expectedOptions);
        });

        // 7. Safe tear down cleanups
        animateSpy.mockRestore();
        rectSpy.mockRestore();
    },
};
