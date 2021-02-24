const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (candles) => {
  let count = 1;
  let currentMax = candles[0];

  for (let i = 1; i < candles.length; i++) {
    const candle = candles[i];
    if (candle > currentMax) {
      count = 1;
      currentMax = candle;
    } else if (candle === currentMax) {
      count++;
    }
  }

  return count;
};
