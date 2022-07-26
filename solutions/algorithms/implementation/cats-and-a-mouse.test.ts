import { main } from './cats-and-a-mouse';

test('the main implementation', () => {
  expect(main(1, 2, 3)).toBe('Cat B');
  expect(main(1, 3, 2)).toBe('Mouse C');
});
