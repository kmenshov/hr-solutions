/* eslint-disable no-console */

const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (arr) => {
  const format = (num) => num.toFixed(6);
  const arrLength = arr.length;

  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.forEach((n) => {
    if (n > 0) {
      positives++;
    } else if (n < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });

  console.log(format(positives / arrLength));
  console.log(format(negatives / arrLength));
  console.log(format(zeros / arrLength));

  // The function should not return a value.
};
