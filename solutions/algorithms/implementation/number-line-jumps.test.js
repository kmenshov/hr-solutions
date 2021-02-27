const jumps = require('./number-line-jumps').main;

test('number-line-jumps', () => {
  expect(jumps([2, 1, 1, 2])).toBe('YES');
  expect(jumps([0, 3, 4, 2])).toBe('YES');
  expect(jumps([0, 2, 5, 3])).toBe('NO');
});
