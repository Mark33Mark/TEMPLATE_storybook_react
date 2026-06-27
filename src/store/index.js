/*
 * simple redux store/actions/reducer implementation.
 */
import { configureStore, createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';

/*
 * The initial state of store when app loads.
 * Usually, this would be fetched from a server.
 */
const TaskBoxData = {
    tasks: [],
    status: 'idle',
    error: null,
};

export const MockedErrorState = {
    tasks: [],
    status: 'failed',
    error: 'Something went wrong',
};

/*
 * create an asyncThunk to fetch tasks from a remote endpoint.
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */
/* v8 ignore next */
export const fetchTasks = createAsyncThunk('taskbox/fetchTasks', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
    const data = await response.json();
    const result = data.map(task => ({
        id: `${task.id}`,
        title: task.title,
        state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
    }));
    return result;
});

/*
 *  For Mock Test use only.
 *  Created to help with the Auto-Docs for the TasksDashboard story.
 * This approach moves the mocking function outside of React
 */
/* v8 ignore next */
export const createMockStore = initialState =>
    configureStore({
        reducer: {
            taskbox: createSlice({
                name: 'taskbox',
                initialState,
                reducers: {
                    updateTaskState: (state, action) => {
                        const { id, newTaskState } = action.payload;
                        const task = state.tasks.find(task => task.id === id);
                        if (task) task.state = newTaskState;
                    },
                },
                extraReducers(builder) {
                    builder
                        .addCase('taskbox/fetchTasks/pending', state => {
                            state.status = 'loading';
                            state.error = null;
                            state.tasks = [];
                        })
                        .addCase('taskbox/fetchTasks/fulfilled', (state, action) => {
                            state.status = 'succeeded';
                            state.error = null;
                            state.tasks = action.payload;
                        })
                        .addCase('taskbox/fetchTasks/rejected', state => {
                            state.status = 'failed';
                            state.error = 'Something went wrong';
                            state.tasks = [];
                        });
                },
            }).reducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(storeAPI => next => action => {
                // if the action is the component trying to fetch data, block it entirely!
                if (typeof action.type === 'string' && action.type.startsWith('taskbox/fetchTasks')) {
                    // returning nothing drops the action into the void,
                    // so the reducer doesn't receive an action, and the current state remains.
                    return;
                }
                // let all other actions (like updateTaskState for clicking checkboxes) pass through normally
                return next(action);
            }),
    });

/*
 * The store is created here.
 * https://redux-toolkit.js.org/api/createSlice
 */
/* v8 ignore next */
const TasksSlice = createSlice({
    name: 'taskbox',
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);

            if (task) {
                task.state = action.payload.newTaskState;
            }
        },
    },
    /*
     * extend the reducer for the async actions
     */
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, state => {
                state.status = 'loading';
                state.error = null;
                state.tasks = [];
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                // Add any fetched tasks to the array
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, state => {
                state.status = 'failed';
                state.error = 'Something went wrong';
                state.tasks = [];
            });
    },

});

// actions contained in the slice are exported for consumption by the components
export const { updateTaskState } = TasksSlice.actions;

// ==========================================
// MEMOIZED SELECTORS
// ==========================================

// base input selector to grab the slice from the root state
const selectTaskbox = state => state.taskbox;

// memoized selector to sort tasks (e.g., Pinned tasks first)
export const selectSortedTasks = createSelector([selectTaskbox], taskbox => {
    const tasks = taskbox.tasks || [];
    // Keep the sorting stable so it doesn't regenerate a new array unless tasks change
    return [...tasks.filter(t => t.state === 'TASK_PINNED'), ...tasks.filter(t => t.state !== 'TASK_PINNED')];
});

// simple memoized selector for status if your components require it
export const selectTaskboxStatus = createSelector([selectTaskbox], taskbox => taskbox.status);

/*
 * app's store configuration
 * https://redux-toolkit.js.org/api/configureStore
 */

export const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    },
});
