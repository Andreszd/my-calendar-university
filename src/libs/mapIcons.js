import { ReactComponent as Setting } from "../assets/icons/settings.svg";
import { ReactComponent as Save } from "../assets/icons/bookmark-solid.svg";

export const libIcons = {
    "icon-settings": Setting,
    "icon-save": Save,
};

export const mapIcon = (type) => libIcons[type];
