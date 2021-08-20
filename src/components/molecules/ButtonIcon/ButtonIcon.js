import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import { libIcons } from "../../../libs/mapIcons";

import PropTypes from "prop-types";

const ButtonIcon = ({ children, type, icon }) => {
    return (
        <div className="button-icon">
            <Button type={type}>
                <Icon type={icon} size="sm" />
                {children}
            </Button>
        </div>
    );
};

ButtonIcon.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    icon: PropTypes.oneOf(Object.keys(libIcons)),
};

ButtonIcon.defaultProps = {
    type: "primary",
    icon: "icon-settings",
};

export default ButtonIcon;
