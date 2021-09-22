const dop = require('./day-of-the-programmer').main;

test('day-of-the-programmer', () => {
  expect(dop(1918)).toBe('26.09.1918');

  expect(dop(1984)).toBe('12.09.1984');
  expect(dop(2017)).toBe('13.09.2017');
  expect(dop(2016)).toBe('12.09.2016');
  expect(dop(1800)).toBe('12.09.1800');
});
