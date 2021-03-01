const { main, alternative } = require('./subarray-division');

test('the main implementation subarray division', () => {
  expect(main([2, 2, 1, 3, 2], 4, 2)).toBe(2);
  expect(main([1, 2, 1, 3, 2], 3, 2)).toBe(2);
  expect(main([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
  expect(main([4], 4, 1)).toBe(1);
});

test('the alternative implementation subarray division', () => {
  expect(alternative([2, 2, 1, 3, 2], 4, 2)).toBe(2);
  expect(alternative([1, 2, 1, 3, 2], 3, 2)).toBe(2);
  expect(alternative([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
  expect(alternative([4], 4, 1)).toBe(1);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 10000000;
  const sources = [
    [[2, 2, 1, 3, 2], 4, 2],
    [[1, 2, 1, 3, 2], 3, 2],
    [[1, 1, 1, 1, 1, 1], 3, 2],
    [[4], 4, 1],
  ];
  const expectations = [2, 2, 0, 1];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});
