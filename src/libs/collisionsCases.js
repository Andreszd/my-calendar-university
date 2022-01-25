export const caseCollisionOne = ({ bStart, bEnd, aStart, aEnd }) =>
  bStart >= aStart && bEnd <= aEnd;

export const caseCollisionTwo = ({ aStart, aEnd, bStart, bEnd }) =>
  bEnd > aEnd && bStart > aStart && bStart < aEnd;

export const caseCollisionThree = ({ aStart, aEnd, bStart, bEnd }) =>
  bStart < aStart && bEnd > aStart && bEnd < aEnd;

export const caseCollisionFour = ({ aStart, aEnd, bStart, bEnd }) =>
  bStart > aStart && bEnd === aEnd;

export const caseCollisionFive = ({ aStart, aEnd, bStart, bEnd }) =>
  bStart < aStart && bEnd === aEnd;

export const caseCollisionSix = ({ aStart, aEnd, bStart, bEnd }) =>
  bStart === aStart && bEnd < aEnd;

export const caseCollisionSeven = ({ aStart, aEnd, bStart, bEnd }) =>
  bStart === aStart && bEnd > aEnd;
