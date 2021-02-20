const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (arr) => arr.reduce((acc, n) => acc + n, 0);
