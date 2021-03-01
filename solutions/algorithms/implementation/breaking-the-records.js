const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated list of scores: ', parseIntString],
];

exports.main = (scores) => {
  // Index 0 is for breaking most points records,
  // and index 1 is for breaking least points records.
  const breaking = [0, 0];
  let max = scores[0];
  let min = scores[0];

  for (let i = 1; i < scores.length; i++) {
    const curr = scores[i];
    if (curr > max) {
      breaking[0]++;
      max = curr;
    } else if (curr < min) {
      breaking[1]++;
      min = curr;
    }
  }

  return breaking;
};
