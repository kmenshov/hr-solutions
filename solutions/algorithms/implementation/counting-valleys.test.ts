import { main, alternative } from './counting-valleys';

test('the main implementation counts valleys', () => {
  expect(main(0, 'UDDDUDUU')).toBe(1);
  expect(main(0, 'DDUUDDUDUUUD')).toBe(2);
});

test('the alternative implementation counts valleys', () => {
  expect(alternative(0, 'UDDDUDUU')).toBe(1);
  expect(alternative(0, 'DDUUDDUDUUUD')).toBe(2);
});

test.skip('comparing the implementations speeds', () => {
  const repeats = 10_000_000;
  const sources = [
    'UDDDUDUU',
    'DDUUDDUDUUUD'
  ];
  const expectations = [1, 2];
  let results: number[] = [];

  let t = benchmark.timer(`The main implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => main(0, s));
  });
  t.stop();
  expect(results).toEqual(expectations);

  t = benchmark.timer(`The alternative implementation (${repeats} runs)`);
  benchmark.repeat(repeats, () => {
    results = sources.map((s) => alternative(0, s));
  });
  t.stop();
  expect(results).toEqual(expectations);
});
