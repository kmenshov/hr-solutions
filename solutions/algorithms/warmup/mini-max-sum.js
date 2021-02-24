const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (arr) => {
  const middle = [];
  const minMax = arr.slice(0, 2);
  if (minMax[0] > minMax[1]) minMax.reverse();

  for (let i = 2; i < arr.length; i++) {
    const n = arr[i];
    if (n < minMax[0]) {
      middle.push(minMax[0]);
      minMax[0] = n;
    } else if (n > minMax[1]) {
      middle.push(minMax[1]);
      minMax[1] = n;
    } else {
      middle.push(n);
    }
  }

  const middleSum = middle.reduce((sum, n) => sum + n);
  console.log(`${minMax[0] + middleSum} ${minMax[1] + middleSum}`);
};
