const { parseIntString, parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  ['Array of integers: ', parseIntString],
  ['Target sum: ', parseInt10],
  ['Target length: ', parseInt10],
];

exports.main = (arr, sum, len) => {
  let s = 0;
  for (let i = 0; i < len; i++) s += arr[i];
  let count = s === sum ? 1 : 0;

  for (let i = len; i < arr.length; i++) {
    s = s - arr[i - len] + arr[i];
    if (s === sum) count++;
  }

  return count;
};

exports.alternative = (arr, sum, len) => {
  let count = 0;
  const sums = [];
  sums[0] = 0;

  for (let i = 0; i < arr.length; i++) sums[i + 1] = sums[i] + arr[i];
  for (let i = 0; i <= arr.length - len; i++) if (sums[i + len] - sums[i] === sum) count++;

  return count;
};
