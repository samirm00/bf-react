import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ clickHandler }) => {
    return (
        <div>
            <button onClick={clickHandler} className="btn">
                Click me
            </button>
        </div>
    );
};

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired
};

export default Button;
