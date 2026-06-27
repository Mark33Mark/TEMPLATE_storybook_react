import { useDispatch, useSelector } from 'react-redux';
import { selectSortedTasks, updateTaskState } from '../../store';
import { Task } from './Task';
import { useAnimateList } from '../../hooks/useAnimateList';

export const TaskList = () => {
    const tasks = useSelector(selectSortedTasks);
    const { status } = useSelector(state => state.taskbox);
    const dispatch = useDispatch();

    const { containerRef, prepareFlip } = useAnimateList();

    const pinTask = (event, id, currentState) => {
        const newTaskState = currentState === 'TASK_PINNED' ? 'TASK_UNPINNED' : 'TASK_PINNED';
        prepareFlip(); // 1. Freeze-frame current DOM positions
        dispatch(updateTaskState({ id, newTaskState }));
    };

    const archiveTask = (event, id, currentState) => {
        event.stopPropagation();
        const newTaskState = currentState === 'TASK_ARCHIVED' ? 'TASK_INBOX' : 'TASK_ARCHIVED';
        prepareFlip(); 
        dispatch(updateTaskState({ id, newTaskState }));
    };

    const LoadingRow = (
        <div className='W8D-TaskListItemsLoading'>
            <span className='W8D-TaskListItemsGlowCheckbox' />
            <span className='W8D-TaskListItemsGlowText'>
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (status === 'loading') {
        return (
            <div className='list-items' data-testid='loading' key='loading'>
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (tasks.length === 0) {
        return (
            <div className='W8D-TaskListItems' key='empty' data-testid='empty'>
                <div className='W8D-TaskListItemsWrapperMessage'>
                    <span className='W8D-TaskListItemsIconTicked' />
                    <p className='W8D-TaskListItemsTitleMessage'>You have no tasks</p>
                    <p className='W8D-TaskListItemsSubtitleMessage'>
                        ...sit back, relax <span className='W8D-TaskListItemsSubtitleMessage_emoticon'>😌</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className='W8D-TaskListItems' data-testid='success' key='success'>
            {tasks.map(task => (
                <Task key={task.id} task={task} onPinTask={pinTask} onArchiveTask={archiveTask} />
            ))}
        </div>
    );
};
