import classNames from 'classnames';
import useDarkMode from 'hooks/useDarkMode';

import './ToggleDarkMode.css';

export default function ToggleDarkMode() {
  const { isActive, switchTheme } = useDarkMode();

  return (
    <div
      className={classNames('toggle-dark-mode', { 'is-active': isActive })}
      onClick={() => switchTheme()}></div>
  );
}

