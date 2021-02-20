const ctt = require('./compare-the-triplets').main;

test('calculates scores for Alice and Bob', () => {
  expect(ctt([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  expect(ctt([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
});
