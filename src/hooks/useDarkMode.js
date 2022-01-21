import { useState } from 'react';

export default function useDarkMode() {
  const [isActive, setActive] = useState(false);

  const switchTheme = () => {
    const defaultValueColor10 = '#fff';
    const defaultValueColorBg = '#e4e6f5';
    const defaultValueColorBlack10 = '#1b1f31';
    const defaultValueColorBgScroollbar = '#cbcfe0';
    const defaultValueColorBorder = '#e5e4e9';
    const defaultValueColorBorderCard = '#cbcfe0';
    if (!isActive) {
      changeCustomProperty('--white-10', '#1e1f26');
      changeCustomProperty('--body-bg-color', '#131417');
      changeCustomProperty('--black-10', defaultValueColor10);
      changeCustomProperty('--bg-scrollbar', '#717790');
      changeCustomProperty('--border-color', '#717790');
      changeCustomProperty('--border-color-card', '#717790');
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
