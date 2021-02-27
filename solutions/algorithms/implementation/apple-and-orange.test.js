const aao = require('./apple-and-orange').main;

beforeEach(() => console.mock('log'));
afterEach(() => console.restore('log'));

test('prints the hits count for apples and oranges', () => {
  aao(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
  expect(console.log.mock.calls.flat()).toEqual([1, 2]);

  console.log.mockClear();
  aao(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
  expect(console.log.mock.calls.flat()).toEqual([1, 1]);
});
