import { ReactComponent as Setting } from '../assets/icons/settings.svg';
import { ReactComponent as Save } from '../assets/icons/bookmark-solid.svg';
import { ReactComponent as ArrowUp } from '../assets/icons/arrow-up.svg';
import { ReactComponent as Close } from '../assets/icons/icon-close.svg';

export const libIcons = {
  'icon-settings': Setting,
  'icon-save': Save,
  'icon-arrow-up': ArrowUp,
  'icon-close': Close,
};

export const mapIcon = (type) => libIcons[type];
