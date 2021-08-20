import PropTypes from "prop-types";
import classNames from "classnames";

import { typeButtons } from "../../../enums/typeButtons";

import "./Button.css";

const Button = ({ type, children }) => {
    return (
        <button
            className={classNames("button", {
                [`button--${type}`]: type,
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    type: PropTypes.oneOf(typeButtons),
};

Button.defaultProps = {
    type: "primary",
};
export default Button;
