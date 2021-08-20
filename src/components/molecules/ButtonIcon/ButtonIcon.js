import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import { libIcons } from "../../../libs/mapIcons";

import PropTypes from "prop-types";

const ButtonIcon = ({ children, type, icon }) => {
    return (
        <div className="button-icon">
            <Button type={type}>
                <Icon
                    type={icon}
                    size="sm"
                    hasBackground={type === "quarternary"}
                    hasInheritedColor={!(type === "quarternary")}
                />
                {children}
            </Button>
        </div>
    );
};

ButtonIcon.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary", "quaternary"]),
    icon: PropTypes.oneOf(Object.keys(libIcons)),
};
//TODO: delete icon default
ButtonIcon.defaultProps = {
    type: "primary",
    icon: "icon-settings",
};

export default ButtonIcon;
