import { parseIntString } from '../../../shared/utils';

export const prompts = [
  ['Positions (space-separated array of integers): ', parseIntString],
];

export const main = (a: number, b: number, c: number): string => {
  const rangeA = Math.abs(c - a);
  const rangeB = Math.abs(c - b);
  if (rangeA < rangeB) return 'Cat A';
  if (rangeA > rangeB) return 'Cat B';
  return 'Mouse C';
};
