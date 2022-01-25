import { useState } from 'react';

export default function useDarkMode() {
  const [isActive, setActive] = useState(false);

  const defaultValueColor10 = '#fff';
  const defaultValueColorBg = '#e4e6f5';
  const defaultValueColorBlack10 = '#1b1f31';
  const defaultValueColorBgScroollbar = '#cbcfe0';
  const defaultValueColorBorder = '#e5e4e9';
  const defaultValueColorBorderCard = '#cbcfe0';

  const whiteDarkMode = '#1e1f26';
  const bgDarkMode = '#131417';
  const grayDarkMode = '#717790';

  const switchTheme = () => {
    if (!isActive) {
      changeCustomProperty('--white-10', whiteDarkMode);
      changeCustomProperty('--body-bg-color', bgDarkMode);
      changeCustomProperty('--black-10', defaultValueColor10);
      changeCustomProperty('--bg-scrollbar', grayDarkMode);
      changeCustomProperty('--border-color', grayDarkMode);
      changeCustomProperty('--border-color-card', grayDarkMode);
    } else {
      changeCustomProperty('--white-10', defaultValueColor10);
      changeCustomProperty('--body-bg-color', defaultValueColorBg);
      changeCustomProperty('--black-10', defaultValueColorBlack10);
      changeCustomProperty('--bg-scrollbar', defaultValueColorBgScroollbar);
      changeCustomProperty('--border-color', defaultValueColorBorder);
      changeCustomProperty('--border-color-card', defaultValueColorBorderCard);
    }
    setActive(!isActive);
  };
  const changeCustomProperty = (name, to) => {
    document.documentElement.style.setProperty(name, to);
  };
  return { switchTheme, isActive };
}
