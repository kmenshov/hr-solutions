const mms = require('./mini-max-sum').main;

beforeEach(() => console.mock('log'));
afterEach(() => console.restore('log'));

test('prints the min and max sums', () => {
  mms([1, 3, 5, 7, 9]);
  expect(console.log.mock.calls.flat()).toEqual(['16 24']);

  console.log.mockClear();
  mms([1, 2, 3, 4, 5]);
  expect(console.log.mock.calls.flat()).toEqual(['10 14']);
});
