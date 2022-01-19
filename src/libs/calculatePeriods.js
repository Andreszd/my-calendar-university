const hours = [
  '0645',
  '0730',
  '0815',
  '0900',
  '0945',
  '1030',
  '1115',
  '1200',
  '1245',
  '1330',
  '1415',
  '1500',
  '1545',
  '1630',
  '1715',
  '1800',
  '1845',
  '1930',
  '2015',
  '2100',
];

export const amountPeriodsByRangePeriod = (iniHour, endHour) => {
  return (
    hours.reduce(
      (acc, current) =>
        parseInt(current) >= iniHour && parseInt(current) <= endHour
          ? acc + 1
          : acc,
      0
    ) - 1
  );
};
