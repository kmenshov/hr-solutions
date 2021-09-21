const { main, alternative } = require('./migratory-birds');

test('the main implementation migratory birds', () => {
  expect(main([1, 1, 2, 2, 3])).toBe(1);
  expect(main([1, 4, 4, 4, 5, 3])).toBe(4);
  expect(main([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
});

test('the alternative implementation migratory birds', () => {
  expect(alternative([1, 1, 2, 2, 3])).toBe(1);
  expect(alternative([1, 4, 4, 4, 5, 3])).toBe(4);
  expect(alternative([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 10_000_000;
  const sources = [
    [1, 1, 2, 2, 3],
    [1, 4, 4, 4, 5, 3],
    [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4],
  ];
  const expectations = [1, 4, 3];
  let results = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});
