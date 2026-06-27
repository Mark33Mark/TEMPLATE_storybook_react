import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { TaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export const MockedState = {
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
    status: 'idle',
    error: null,
};

// super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }) => (
    <Provider
        store={configureStore({
            reducer: {
                taskbox: createSlice({
                    name: 'taskbox',
                    initialState: taskboxState,
                    reducers: {
                        updateTaskState: (state, action) => {
                            const { id, newTaskState } = action.payload;
                            const task = state.tasks.findIndex(task => task.id === id);
                            if (task >= 0) {
                                state.tasks[task].state = newTaskState;
                            }
                        },
                    },
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);

const meta = {
    title: 'Tutorial/TaskList',
    component: TaskList,
    decorators: [story => <div>{story()}</div>],
    tags: ['autodocs'],
    excludeStories: /.*MockedState$/,
};
export default meta;

export const Default = {
    decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>],
};

export const WithPinnedTasks = {
    decorators: [
        story => {
            const pinnedtasks = [
                ...MockedState.tasks.slice(0, 5),
                { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
            ];

            return (
                <Mockstore
                    taskboxState={{
                        ...MockedState,
                        tasks: pinnedtasks,
                    }}
                >
                    {story()}
                </Mockstore>
            );
        },
    ],
};

export const Loading = {
    decorators: [
        story => (
            <Mockstore
                taskboxState={{
                    ...MockedState,
                    status: 'loading',
                }}
            >
                {story()}
            </Mockstore>
        ),
    ],
};

export const Empty = {
    decorators: [
        story => (
            <Mockstore
                taskboxState={{
                    ...MockedState,
                    tasks: [],
                }}
            >
                {story()}
            </Mockstore>
        ),
    ],
};


/*
    ALTERNATIVE REDUX IMPLEMENTATION:  if you move store generation into a helper function outside of React entirely
    then the scenario's would be setup as follows:

    // 1. replace <Mockstore \> with this helper function:
    const createMockStore = initialState =>
        configureStore({
            reducer: {
                taskbox: createSlice({
                    name: 'taskbox',
                    initialState,
                    reducers: {
                        updateTaskState: (state, action) => {
                            const { id, newTaskState } = action.payload;
                            const task = state.tasks.findIndex(task => task.id === id);
                            if (task >= 0) {
                                state.tasks[task].state = newTaskState;
                            }
                        },
                    },
                }).reducer,
            },
        });

    // 2. update the exported scenarios with the following:
    export const Default = {
        decorators: [
            story => (
                <Provider store={createMockStore(MockedState)}>
                    {story()}
                </Provider>
            )
        ],
    };

    export const WithPinnedTasks = {
        decorators: [
            story => {
                const pinnedtasks = [
                    ...MockedState.tasks.slice(0, 5),
                    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
                ];

                const state = { ...MockedState, tasks: pinnedtasks };

                return (
                    <Provider store={createMockStore(state)}>
                        {story()}
                    </Provider>
                );
            },
        ],
    };

    export const Loading = {
        decorators: [
            story => (
                <Provider store={createMockStore({ ...MockedState, status: 'loading' })}>
                    {story()}
                </Provider>
            ),
        ],
    };

    export const Empty = {
        decorators: [
            story => (
                <Provider store={createMockStore({ ...MockedState, tasks: [] })}>
                    {story()}
                </Provider>
            ),
        ],
    };
*/