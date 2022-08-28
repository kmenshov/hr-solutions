import { main } from './forming-a-magic-square';

test('the main implementation', () => {
  expect(main([5, 3, 4], [1, 5, 8], [6, 4, 2])).toBe(7);
  expect(main([4, 9, 2], [3, 5, 7], [8, 1, 5])).toBe(1);
  expect(main([4, 8, 2], [4, 5, 7], [6, 1, 6])).toBe(4);
});
