/* eslint-disable no-console */
const pm = require('./plus-minus').main;

let logMock;
let oldLog;

beforeEach(() => {
  logMock = jest.fn();
  oldLog = console.log;

  console.log = logMock;
});

afterEach(() => {
  console.log = oldLog;
});

test('prints the ratio of positive, negative and zero values', () => {
  pm([1, 1, 0, -1, -1]);
  expect(logMock.mock.calls.flat()).toEqual(['0.400000', '0.400000', '0.200000']);

  logMock.mockClear();
  pm([-4, 3, -9, 0, 4, 1]);
  expect(logMock.mock.calls.flat()).toEqual(['0.500000', '0.333333', '0.166667']);

  logMock.mockClear();
  pm([1, 2, 3, -1, -2, -3, 0, 0]);
  expect(logMock.mock.calls.flat()).toEqual(['0.375000', '0.375000', '0.250000']);
});
