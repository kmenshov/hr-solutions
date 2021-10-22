const bd = require('./bill-division').main;

beforeEach(() => console.mock('log'));
afterEach(() => console.restore('log'));

test('prints the amount of money to return or a string indicating correct division', () => {
  bd([2, 4, 6], 2, 6);
  expect(console.log.mock.calls.flat()).toEqual([3]);

  console.log.mockClear();
  bd([3, 10, 2, 9], 1, 12);
  expect(console.log.mock.calls.flat()).toEqual([5]);

  console.log.mockClear();
  bd([3, 10, 2, 9], 1, 7);
  expect(console.log.mock.calls.flat()).toEqual(['Bon Appetit']);
});
