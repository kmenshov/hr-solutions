const bts = require('./between-two-sets').main;

test('returns the number of integers between the two given sets', () => {
  expect(bts([2, 6], [24, 36])).toBe(2);
  expect(bts([2, 4], [16, 32, 96])).toBe(3);
});
