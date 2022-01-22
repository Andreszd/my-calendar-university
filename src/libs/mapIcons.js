import { ReactComponent as Setting } from '../assets/icons/settings.svg';
import { ReactComponent as Save } from '../assets/icons/bookmark-solid.svg';
import { ReactComponent as ArrowUp } from '../assets/icons/arrow-up.svg';
import { ReactComponent as Close } from '../assets/icons/icon-close.svg';
import { ReactComponent as Hamburguer } from '../assets/icons/icon-hamburger.svg';

export const libIcons = {
  'icon-settings': Setting,
  'icon-save': Save,
  'icon-arrow-up': ArrowUp,
  'icon-close': Close,
  'icon-hamburguer': Hamburguer,
};

export const mapIcon = (type) => libIcons[type];
