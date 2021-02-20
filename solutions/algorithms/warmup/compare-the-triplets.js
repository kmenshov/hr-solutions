const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide the Alice\'s space-separated array of integers: ', parseIntString],
  ['Provide the Bob\'s space-separated array of integers: ', parseIntString],
];

exports.main = (a, b) => {
  const result = [0, 0];

  a.forEach((ascore, i) => {
    if (ascore > b[i]) {
      result[0] += 1;
    } else if (ascore < b[i]) {
      result[1] += 1;
    }
  });

  return result;
};
