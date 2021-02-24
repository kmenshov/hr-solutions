const pm = require('./plus-minus').main;

beforeEach(() => console.mock('log'));
afterEach(() => console.restore('log'));

test('prints the ratio of positive, negative and zero values', () => {
  pm([1, 1, 0, -1, -1]);
  expect(console.log.mock.calls.flat()).toEqual(['0.400000', '0.400000', '0.200000']);

  console.log.mockClear();
  pm([-4, 3, -9, 0, 4, 1]);
  expect(console.log.mock.calls.flat()).toEqual(['0.500000', '0.333333', '0.166667']);

  console.log.mockClear();
  pm([1, 2, 3, -1, -2, -3, 0, 0]);
  expect(console.log.mock.calls.flat()).toEqual(['0.375000', '0.375000', '0.250000']);
});
