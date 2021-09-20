const { parseIntString, parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  ['Array of integers: ', parseIntString],
  ['Divisible target: ', parseInt10],
];

exports.main = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k === 0) count++;
    }
  }
  return count;
};
