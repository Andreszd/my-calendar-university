import PropTypes from "prop-types";

import classNames from "classnames";

import "./Container.css";

const Container = ({ children, hasFullWidth, padding }) => (
    <div
        className={classNames("container", {
            "has-full-width": hasFullWidth,
        })}
        style={{ padding: "2rem" }}
    >
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf([]),
};
Container.defaultProps = {
    hasFullWidth: true,
};

export default Container;
