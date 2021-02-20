/*
  Actually, the task's description says that the maximum possible number is 10**10,
  which JavaScript handles naturally. However, the task's purpose implies that
  the numbers used are problematic to handle because of their size, so I decided
  to implement it in a bit more fun way.
*/
const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (sourceArr) => {
  const splitToDigits = (num) => num.toString().split('').map((i) => parseInt(i, 10));
  const digitsToNumber = (arr) => arr.slice(0).reverse().reduce(
    (acc, next, i) => acc + next * 10 ** i,
    0,
  );

  /* eslint-disable no-param-reassign */
  // shifts the addition's result to the right
  const addOneAtIndex = (arr, i) => {
    arr[i] = arr[i] || 0;

    if (arr[i] < 9) {
      arr[i] += 1;
    } else {
      arr[i] = 0;
      addOneAtIndex(arr, i + 1);
    }

    return arr;
  };
  /* eslint-enable */

  const sumArrays = (a, b) => {
    // reverse the arrays to sum them from the least significant digit
    const arrays = [a.slice(0).reverse(), b.slice(0).reverse()];
    // put the shortest array first
    if (arrays[0].length > arrays[1].length) arrays.reverse();

    arrays[0].forEach((digit, i) => {
      const sum = arrays[1][i] + digit;
      arrays[1][i] = sum % 10;
      if (sum > 9) addOneAtIndex(arrays[1], i + 1);
    });

    return arrays[1].reverse();
  };

  const sumArray = sourceArr.reduce(
    (acc, n) => sumArrays(acc, splitToDigits(n)),
    [0],
  );

  return digitsToNumber(sumArray);
};
