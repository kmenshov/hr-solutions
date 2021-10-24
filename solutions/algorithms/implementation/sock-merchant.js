const { parseIntString, parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  [
    'Why do Hackerrank challenges keep insisting on providing the length of the array?' +
    ' We know the .length, thank you! (type anything): ',
    parseInt10,
  ],
  ['Array of integer colors: ', parseIntString],
];

exports.main = (_n, ar) => {
  let pairs = 0;
  const colors = [];

  ar.forEach((colorCode) => {
    if (colors[colorCode] > 0) {
      colors[colorCode] = 0;
      pairs++;
    } else {
      colors[colorCode] = 1;
    }
  });

  return pairs;
};

exports.alternative = (_n, ar) => {
  let pairs = 0;
  const colors = [];

  ar.forEach((colorCode) => {
    colors[colorCode] = (colors[colorCode] || 0) + 1;
    if (colors[colorCode] % 2 === 0) pairs++;
  });

  return pairs;
};

exports.alternative2 = (_n, ar) => {
  let pairs = 0;
  const colors = {};

  ar.forEach((colorCode) => {
    if (colors[colorCode] > 0) {
      colors[colorCode] = 0;
      pairs++;
    } else {
      colors[colorCode] = 1;
    }
  });

  return pairs;
};

exports.alternative3 = (_n, ar) => {
  const colors = [];
  ar.forEach((colorCode) => { colors[colorCode] = (colors[colorCode] || 0) + 1; });

  /* eslint-disable */
  // The '~~' below is an integer division in trying to achieve some performance gain.
  // See here: https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr
  return colors.reduce((pairs, color) => pairs + (~~(color / 2)), 0);
  /* eslint-enable */
};
