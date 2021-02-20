const avbs = require('./a-very-big-sum').main;

test('sums big numbers', () => {
  expect(avbs([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe(5000000015);
  expect(avbs([9694301757, 1632564750, 4576512150, 3120100587, 4366276660])).toBe(23389755904);
});

test.skip('a-very-big-sum benchmark', () => {
  const arr = [];
  benchmark.repeat(10000, () => {
    arr.push(benchmark.randomInt(9999999999));
  });

  const expected = arr.reduce((sum, n) => sum + n, 0);
  let actual;

  const t = benchmark.timer('A Very Big Sum (100 runs)');
  benchmark.repeat(100, () => {
    actual = avbs(arr);
  });
  t.stop();

  expect(actual).toBe(expected);
});
