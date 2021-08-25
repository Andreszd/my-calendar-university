import PropTypes from "prop-types";
import classNames from "classnames";

import { typesHeading, sizes, colors } from "./constants";

import "./Heading.css";

const getCustomClass = (color, size, textTransform) => ({
    [`heading--color-${color}`]: color,
    [`heading--size-${size}`]: size,
    [`heading--text-transform-${textTransform}`]: textTransform,
});
//TODO: try refactor to mapheadin

const mapHeading = ({ children, type, color, size, textTransform }) => {
    const typeTag = typesHeading[type];
    if (typeTag === "h1")
        return (
            <h1
                className={classNames(
                    "heading",
                    getCustomClass(color, size, textTransform)
                )}
            >
                {children}
            </h1>
        );
    if (typeTag === "h2")
        return (
            <h2
                className={classNames(
                    "heading",
                    getCustomClass(color, size, textTransform)
                )}
            >
                {children}
            </h2>
        );
    if (typeTag === "h3")
        return (
            <h3
                className={classNames(
                    "heading",
                    getCustomClass(color, size, textTransform)
                )}
            >
                {children}
            </h3>
        );
};

const Heading = ({ children, type, color, size, textTransform }) => (
    <>{mapHeading({ children, type, color, size, textTransform })}</>
);

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(typesHeading)),
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(Object.keys(sizes)),
    textTransform: PropTypes.oneOf(["uppercase", "capitalize", "lowercase"]),
};

Heading.defaultProps = {
    color: "base",
    type: "h1",
    size: "lg",
};

export default Heading;
