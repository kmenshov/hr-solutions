const tc = require('./time-conversion').main;

test('converts AM/PM time to military time', () => {
  expect(tc('12:01:00PM')).toBe('12:01:00');
  expect(tc('12:01:00AM')).toBe('00:01:00');
  expect(tc('05:14:42PM')).toBe('17:14:42');
  expect(tc('11:14:42PM')).toBe('23:14:42');
});
