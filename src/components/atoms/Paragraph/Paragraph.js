import classNames from "classnames";
import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({
    weight,
    color,
    size,
    children,
    isInline,
    isResetStyles,
}) => {
    return (
        <p
            className={classNames("paragraph", {
                [`paragraph--size-${size}`]: size,
                [`paragraph--weight-${weight}`]: weight,
                [`paragraph--color-${color}`]: color,
                "is-styles-reset": isResetStyles,
                "is-inline": isInline,
            })}
        >
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["very-small", "small", "normal", "medium", "big"]),
    color: PropTypes.oneOf(["gray-ligth", "gray", "black"]),
    weight: PropTypes.oneOf(["normal", "medium", "bold"]),
    isInline: PropTypes.bool,
    isResetStyles: PropTypes.bool,
};

Paragraph.defaultProps = {
    size: "normal",
    weight: "normal",
    isInline: false,
    color: "black",
    isResetStyles: false,
};

export default Paragraph;
