import { parseInt10 } from '../../../shared/utils';

export const prompts = [
  [
    'Why do Hackerrank challenges keep insisting on providing the length of the array?' +
    ' We know the .length, thank you! (type anything): ',
    parseInt10,
  ],
  ['Sequence of steps: '],
];

export const main = (_steps: number, path: string): number => {
  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
      altitude++;
      if (altitude === 0) valleys++;
    } else {
      altitude--;
    }
  }

  return valleys;
};

export const alternative = (_steps: number, path: string): number => {
  let altitude = 0;
  let valleys = 0;

  const pathLength = path.length;

  for (let i = 0; i < pathLength; i++) {
    if (path[i] === 'U') {
      altitude++;
      if (altitude === 0) valleys++;
    } else {
      altitude--;
    }

    if (Math.abs(altitude) >= pathLength - i - 1) {
      if (altitude < 0) valleys++;
      break;
    }
  }

  return valleys;
};
