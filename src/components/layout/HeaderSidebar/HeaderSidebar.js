import PropTypes from "prop-types";

import "./HeaderSidebar.css";

const HeaderSidebar = ({ children }) => {
    return <div className="l-header-sidebar">{children}</div>;
};
HeaderSidebar.propTypes = {
    children: PropTypes.node,
};
export default HeaderSidebar;
