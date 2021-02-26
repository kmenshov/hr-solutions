const gs = require('./grading-students').main;

test('rounds up some grades', () => {
  expect(gs([84, 29, 57])).toEqual([85, 29, 57]);
  expect(gs([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});
