import PropTypes from "prop-types";
import "./GridHeaderLayout.css";

const GridHeaderLayout = ({ children }) => (
    <div className="l-grid-header">{children}</div>
);

GridHeaderLayout.propTypes = {
    children: PropTypes.node,
};

export default GridHeaderLayout;
