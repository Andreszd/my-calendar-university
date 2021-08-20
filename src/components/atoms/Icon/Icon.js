import { mapIcon } from "../../../libs/mapIcons";
import { mapSize } from "../../../libs/mapSizes";

import classNames from "classnames";

import PropTypes from "prop-types";
import "./Icon.css";
const Icon = ({ type, hasBackground, size }) => {
    const Svg = mapIcon(type);
    return (
        <div
            className={classNames("icon", {
                "has-background": hasBackground,
            })}
        >
            <Svg width={mapSize(size)} height={mapSize(size)} />
        </div>
    );
};
Icon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
    hasBackground: PropTypes.bool,
};
Icon.defaultProps = {
    hasBackground: false,
};

export default Icon;
