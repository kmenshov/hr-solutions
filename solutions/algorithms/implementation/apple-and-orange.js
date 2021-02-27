const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Starting point of the house: ', parseInt],
  ['Ending point of the house: ', parseInt],
  ['Location of the Apple tree: ', parseInt],
  ['Location of the Orange tree: ', parseInt],
  ['Apples distances (space-separated array): ', parseIntString],
  ['Orangess distances (space-separated array): ', parseIntString],
];

exports.main = (s, t, a, b, apples, oranges) => {
  const hitFrom = (location) => function hitsReducer(sum, dist) {
    const fallsAt = location + dist;
    return fallsAt >= s && fallsAt <= t ? sum + 1 : sum;
  };

  const applesHits = apples.reduce(hitFrom(a), 0);
  const orangesHits = oranges.reduce(hitFrom(b), 0);

  console.log(applesHits);
  console.log(orangesHits);
};
