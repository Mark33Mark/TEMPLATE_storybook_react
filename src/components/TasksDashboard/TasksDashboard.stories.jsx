import { http, HttpResponse } from 'msw';
import { MockedState } from '../Task/Tasklist.stories';
import { Provider } from 'react-redux';
import { TasksDashboard } from './TasksDashboard';
import { createMockStore, MockedErrorState } from '../../store';

const meta = {
    title: 'Tutorial/TasksDashboard',
    component: TasksDashboard,
    tags: ['autodocs'],
    // a global silencer for this story file, otherwise warning flood the console
    parameters: {
        msw: {
            handlers: [
                http.get('https://jsonplaceholder.typicode.com/todos', () => {
                    // It doesn't matter what we return here because the Redux middleware
                    // drops the action anyway. This just satisfies MSW so it doesn't warn.
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};
export default meta;

export const Default = {
    decorators: [
        story => (
            // Seed it with the successful data
            <Provider store={createMockStore({ ...MockedState, status: 'succeeded' })}>{story()}</Provider>
        ),
    ],
    play: async ({ canvas, userEvent }) => {
        // Because the data is instantly there, we don't even need to wait for the loading spinner!
        const pinTask1 = await canvas.findByLabelText('PinTask-1');
        const pinTask3 = await canvas.findByLabelText('PinTask-3');

        await userEvent.click(pinTask1);
        await userEvent.click(pinTask3);
    },
};

export const Error = {
    decorators: [
        story => (
            // Seed it with the error data
            <Provider store={createMockStore(MockedErrorState)}>{story()}</Provider>
        ),
    ],
};
