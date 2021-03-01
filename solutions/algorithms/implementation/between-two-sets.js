const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide the first space-separated array of integers: ', parseIntString],
  ['Provide the second space-separated array of integers: ', parseIntString],
];

// all integers are positive
exports.main = (arr1, arr2) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const lcmArr = (arr) => {
    let currLcm = arr[0];
    for (let i = 1; i < arr.length; i++) currLcm = lcm(arr[i], currLcm);
    return currLcm;
  };

  const gcdArr = (arr) => {
    let currGcd = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currGcd = gcd(arr[i], currGcd);
      if (currGcd === 1) break;
    }
    return currGcd;
  };

  const lcm1 = lcmArr(arr1);
  const gcd2 = gcdArr(arr2);

  let count = 0;
  let i = 1;
  for (let step = lcm1 * i; step <= gcd2; step = lcm1 * ++i) if (gcd2 % step === 0) count++;

  return count;
};
