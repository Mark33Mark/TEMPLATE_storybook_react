
/** Primary UI component for user interaction */
export const Button = (props) => {

    const {primary = false, active = true, size = 'medium', backgroundColor, label, ...htmlAttributes} = props;
    const mode = primary ? 'W8D-Button_primary' : 'W8D-Button_secondary';
    const isActive = active ? true : false;

    return (
        <button
            type='button'
            className={['W8D-Button', `W8D-Button_${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            disabled = { !isActive }
            {...htmlAttributes}
        >
            {label}
        </button>
    );
};
