const sas = require('./simple-array-sum').main;

test('sums array elements', () => {
  expect(sas([1, 2, 3, 4, 10, 11])).toBe(31);
});
