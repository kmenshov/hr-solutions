const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Enter line 1: ', parseIntString],
  ['Enter line 2: ', parseIntString],
  ['Enter line 3: ', parseIntString],
];

exports.main = (...arr) => {
  const diagonalSums = arr.reduce(
    (sum, row, i) => [sum[0] + row[i], sum[1] + row[row.length - 1 - i]],
    [0, 0],
  );
  return Math.abs(diagonalSums[0] - diagonalSums[1]);
};
