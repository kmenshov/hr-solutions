const bcc = require('./birthday-cake-candles').main;

test('counts the tallest candles', () => {
  expect(bcc([4, 4, 1, 3])).toBe(2);
  expect(bcc([3, 2, 1, 3])).toBe(2);
});
