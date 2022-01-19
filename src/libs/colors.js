const colors = [
  {
    className: 'color-1',
    code: '#f5eafd',
    isUsed: false,
  },
  {
    className: 'color-2',
    code: '#fee9ec',
    isUsed: false,
  },
  {
    className: 'color-3',
    code: '#fef6e8',
    isUsed: false,
  },
  {
    className: 'color-4',
    code: '#eeeffd',
    isUsed: false,
  },
  {
    className: 'color-5',
    code: '#e8f5e9',
    isUsed: false,
  },
  {
    className: 'color-6',
    code: '#eceff1',
    isUsed: false,
  },
  {
    className: 'color-7',
    code: '#fff3e0',
    isUsed: false,
  },
  {
    className: 'color-8',
    code: '#e0f7fa',
    isUsed: false,
  },
];

const getRandomClassColor = () => {
  let idx = 0;
  let className = null;
  //FIXME refactor
  if (isAllClassUsed()) return 'default-color';

  while (!className) {
    idx = getRandomNumber(colors.length - 1, 0);
    console.log('hello');
    if (colors[idx] && !colors[idx].isUsed) {
      colors[idx].isUsed = true;
      return colors[idx].className;
    }
  }
};

const enableColor = (className) => {
  const color = colors.find((color) => color.className === className);
  color.isUsed = false;
};

const isAllClassUsed = () => {
  console.log(colors);
  return colors.every(({ isUsed }) => isUsed === true);
};

const getRandomNumber = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

export { getRandomClassColor, enableColor };
