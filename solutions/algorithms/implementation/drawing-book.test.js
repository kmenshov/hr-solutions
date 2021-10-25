const db = require('./drawing-book').main;

test('calculates the minimum number of pages to turn', () => {
  expect(db(5, 3)).toBe(1);
  expect(db(6, 2)).toBe(1);
  expect(db(5, 4)).toBe(0);
});
