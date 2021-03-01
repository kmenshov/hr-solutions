const btr = require('./breaking-the-records').main;

test('counts the numbers of breaking the max and the min records', () => {
  expect(btr([12, 24, 10, 24])).toEqual([1, 1]);
  expect(btr([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
  expect(btr([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([4, 0]);
});
