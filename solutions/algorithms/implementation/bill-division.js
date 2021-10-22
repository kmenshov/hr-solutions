const { parseIntString, parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  ['Array of integer costs: ', parseIntString],
  ['Index of the item Anna doesn\'t eat: ', parseInt10],
  ['Amount of money Anna contributed: ', parseInt10],
];

exports.main = (bill, k, b) => {
  const annaAte = [...bill];
  annaAte.splice(k, 1);
  const actualCost = annaAte.reduce((sum, nextCost) => sum + nextCost, 0) / 2;

  console.log(actualCost === b ? 'Bon Appetit' : b - actualCost);
};
