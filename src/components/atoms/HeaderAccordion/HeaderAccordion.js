import PropTypes from "prop-types";

import classNames from "classnames";
import "./HeaderAccordion.css";

export default function HeaderAccordion({ children, isActive, onClick }) {
    return (
        <div
            className={classNames("accordion__header", {
                "is-active": isActive,
            })}
            onClick={onClick}
        >
            <p className="accordion__text">{children}</p>
        </div>
    );
}

HeaderAccordion.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
};
