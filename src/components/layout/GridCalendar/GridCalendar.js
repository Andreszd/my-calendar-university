import PropTypes from "prop-types";

import "./GridCalendar.css";

const GridCalendar = ({ children }) => {
    return <div className="l-grid-calendar">{children}</div>;
};

GridCalendar.propTypes = {
    children: PropTypes.node,
};

export default GridCalendar;
