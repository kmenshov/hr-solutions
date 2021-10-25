const { parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  ['The number of pages in the book: ', parseInt10],
  ['The page number to turn to: ', parseInt10],
];

exports.main = (n, p) => Math.min(
  Math.floor(p / 2),
  Math.ceil((n - (n % 2) - p) / 2),
);
