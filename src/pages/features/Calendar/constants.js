export const rows = {
  1: '1/2',
  2: '2/3',
  3: '3/4',
  4: '4/5',
  5: '5/6',
  6: '6/7',
  7: '7/8',
  8: '8/9',
  9: '9/10',
  10: '10/11',
  11: '11/12',
  12: '12/13',
  13: '13/14',
  14: '14/15',
  15: '15/16',
  16: '16/17',
  17: '17/18',
  18: '18/19',
  19: '19/20',
  20: '20/21',
  21: '21/22',
};

export const colums = {
  1: '1/1',
  2: '2/3',
  3: '3/4',
  4: '4/5',
  5: '5/6',
  6: '6/7',
  7: '7/8',
};

export const days = {
  LU: 1,
  MA: 2,
  MI: 3,
  JU: 4,
  VI: 5,
  SA: 6,
};

export function mapRow(positionRow) {
  return rows[positionRow];
}

export function mapColums(positionColum) {
  return colums[positionColum];
}
