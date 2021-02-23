const dd = require('./diagonal-difference').main;

test('calculates diagonal difference', () => {
  expect(dd([1, 2, 3], [4, 5, 6], [9, 8, 9])).toBe(2);
  expect(dd([11, 2, 4], [4, 5, 6], [10, 8, -12])).toBe(15);
});
