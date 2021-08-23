import { mapIcon } from "../../../libs/mapIcons";
import { mapSize } from "../../../libs/mapSizes";
import { libIcons } from "../../../libs/mapIcons";

import classNames from "classnames";

import PropTypes from "prop-types";
import "./Icon.css";
const Icon = ({ type, hasBackground, size, hasInheritedColor }) => {
    const Svg = mapIcon(type);
    return (
        <div
            className={classNames("icon", {
                "has-background": hasBackground,
                "has-inherited-color": hasInheritedColor,
            })}
        >
            <Svg width={mapSize(size)} height={mapSize(size)} />
        </div>
    );
};
Icon.propTypes = {
    type: PropTypes.oneOf(Object.keys(libIcons)),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
    hasBackground: PropTypes.bool,
    hasInheritedColor: PropTypes.bool,
};
Icon.defaultProps = {
    hasBackground: false,
    hasInheritedColor: true,
};

export default Icon;
