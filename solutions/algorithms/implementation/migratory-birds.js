const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Array of integers: ', parseIntString],
];

exports.main = (arr) => {
  arr.sort((a, b) => a - b);

  let maxId = arr[0];
  let maxFreq = 1;
  let currentMaxFreq = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (currentMaxFreq > maxFreq) {
        maxFreq = currentMaxFreq;
        maxId = arr[i - 1];
      }
      currentMaxFreq = 1;
    } else {
      currentMaxFreq++;
    }
  }

  return maxId;
};

exports.alternative = (arr) => {
  const frequencies = [];

  let maxFreq = 0;
  for (let i = 0; i < arr.length; i++) {
    frequencies[arr[i]] = (frequencies[arr[i]] || 0) + 1;
    if (maxFreq < frequencies[arr[i]]) maxFreq = frequencies[arr[i]];
  }

  return frequencies.findIndex((f) => f === maxFreq);
};
