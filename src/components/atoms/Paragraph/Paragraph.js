import classNames from "classnames";
import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({ weight, color, size, children, isInline }) => {
    return (
        <p
            className={classNames("paragraph", {
                [`paragraph--size-${size}`]: size,
                [`paragraph--weight-${weight}`]: weight,
                [`paragraph--color-${color}`]: color,
                "is-inline": isInline,
            })}
        >
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "normal", "medium", "big"]),
    color: PropTypes.string,
    weight: PropTypes.oneOf(["normal", "medium", "bold"]),
    isInline: PropTypes.bool,
};

Paragraph.defaultProps = {
    size: "normal",
    weight: "normal",
    isInline: false,
};

export default Paragraph;
