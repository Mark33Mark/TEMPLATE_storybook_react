
export const Task = props => {
    const {
        task: { id, title, state },
        onArchiveTask,
        onPinTask,
    } = props;

    return (
        <div className={`W8D-TaskListItem ${state}`} data-id={id}>
            <label htmlFor={`W8D-ArchiveTask-${id}`} aria-label={`ArchiveTask-${id}`} className='W8D-TaskCheckboxLabel'>
                <input
                    id={`W8D-ArchiveTask-${id}`}
                    type='checkbox'
                    name='checked'
                    className='W8D-TaskCheckbox'
                    onChange={() => onArchiveTask(event, id, state)}
                    checked={state === 'TASK_ARCHIVED'}
                />
                <span data-testid='custom-checkbox' />
            </label>

            <label htmlFor={`task-title_${id}`} aria-label={title} className='W8D-TaskTitleLabel'>
                <input
                    id={`task-title_${id}`}
                    type='text'
                    name='title'
                    className='W8D-TaskTextbox'
                    placeholder='provide a task'
                    value={title}
                    readOnly={true}
                />
            </label>
            {state !== 'TASK_ARCHIVED' && (
                <button
                    className='W8D-TaskPinButton'
                    onClick={() => onPinTask(event, id, state)}
                    id={`pin-task_${id}`}
                    aria-label={`PinTask-${id}`}
                    key={`PinTask-${id}`}
                >
                    <span className={`W8D-TaskStarIcon`} />
                </button>
            )}
        </div>
    );
};
