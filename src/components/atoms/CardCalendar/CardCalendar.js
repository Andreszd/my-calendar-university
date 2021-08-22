import "./CardCalendar.css";

import { mapRow, mapColums, colums, rows } from "./constants";

import PropTypes from "prop-types";

const CardCalendar = ({ children, row, col }) => {
    return (
        <div
            className="segment-hour"
            style={{ gridRow: mapRow(row), gridColumn: mapColums(col) }}
        >
            {children}
        </div>
    );
};
CardCalendar.propTypes = {
    children: PropTypes.node,
    row: PropTypes.oneOf(Object.keys(rows)),
    col: PropTypes.oneOf(Object.keys(colums)),
};
export default CardCalendar;
