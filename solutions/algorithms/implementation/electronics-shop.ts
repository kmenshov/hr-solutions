import { parseIntString, parseInt10 } from '../../../shared/utils';

export const prompts = [
  ['Keyboards (space-separated array of integers): ', parseIntString],
  ['Drives (space-separated array of integers): ', parseIntString],
  ['Budget: ', parseInt10],
];

export const main = (budget: number, keyboards: number[], drives: number[]): number => {
  const reverse = (a: number, b: number) => b - a;
  const kDesc = keyboards.sort(reverse);
  const dDesc = drives.sort(reverse);
  const dMin = dDesc[dDesc.length - 1];

  let maxToSpend = -1;

  kDesc.forEach((kPrice) => {
    if (kPrice >= budget) return;

    const budgetRemainder = budget - kPrice;
    if (budgetRemainder < dMin) return;

    const dPrice = dDesc.find((dp) => dp <= budgetRemainder);

    const toSpend = kPrice + dPrice!;
    if (toSpend > maxToSpend) maxToSpend = toSpend;
  });

  return maxToSpend;
};
