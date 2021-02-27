const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of x1, v1, x2, v2: ', parseIntString],
];

exports.main = (data) => {
  const [x1, v1, x2, v2] = data;

  const locDiff = x2 - x1;
  const speedDiff = v2 - v1;
  return (locDiff / speedDiff < 0) && (locDiff % speedDiff === 0) ? 'YES' : 'NO';
};
