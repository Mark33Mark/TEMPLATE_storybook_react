import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../../store';
import { TaskList } from '../Task';

export const TasksDashboard = () => {
    const dispatch = useDispatch();
    // retrieve the error field from the updated store
    const { error } = useSelector(state => state.taskbox);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (error) {
        return (
            <div className='W8D-TasksDashboard'>
                <div className='W8D-TasksDashboardErrorMessageWrapper'>
                    <span className='W8D-TasksDashboardErrorIcon_sadFace' />
                    <p className='W8D-TasksDashboardErrorMessage_title'>Oh no!</p>
                    <p className='W8D-TasksDashboardErrorMessage_subtitle'>Something went wrong</p>
                </div>
            </div>
        );
    }

    return (
        <div className='W8D-TasksDashboard'>
            <nav>
                <h1 className='W8D-TasksDashboardTitle'>Taskbox</h1>
            </nav>
            <TaskList />
        </div>
    );
};
