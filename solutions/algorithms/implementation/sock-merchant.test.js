const {
  main,
  alternative,
  alternative2,
  alternative3,
} = require('./sock-merchant');

test('the main implementation socks pairs counting', () => {
  expect(main(undefined, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  expect(main(undefined, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test('the alternative implementation socks pairs counting', () => {
  expect(alternative(undefined, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  expect(alternative(undefined, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test('the alternative2 implementation socks pairs counting', () => {
  expect(alternative2(undefined, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  expect(alternative2(undefined, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test('the alternative3 implementation socks pairs counting', () => {
  expect(alternative3(undefined, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  expect(alternative3(undefined, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 10_000_000;
  const sources = [
    [undefined, [1, 2, 1, 2, 1, 3, 2]],
    [undefined, [10, 20, 20, 10, 10, 30, 50, 10, 20]],
  ];
  const expectations = [2, 3];
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

  t = benchmark.timer(`The alternative2 implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative2(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative3 implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative3(...s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});
