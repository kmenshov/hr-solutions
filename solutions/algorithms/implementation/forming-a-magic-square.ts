import { parseIntString } from '../../../shared/utils';

export const prompts = [
  ['First row (space-separated array of integers): ', parseIntString],
  ['Second row (space-separated array of integers): ', parseIntString],
  ['Third row (space-separated array of integers): ', parseIntString],
];

const allMagicSquares3 = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
];

export const main = (...s: number[][]): number => {
  const conversionCost = (source: number[][], square: number[][]) => {
    let cost = 0;
    for (let i = 0; i < square.length; i++) {
      for (let k = 0; k < square[0].length; k++) {
        cost += Math.abs(source[i][k] - square[i][k]);
      }
    }
    return cost;
  };

  const costs: number[] = [];
  allMagicSquares3.forEach((square) => {
    costs.push(conversionCost(s, square));
  });

  return Math.min(...costs);
};
