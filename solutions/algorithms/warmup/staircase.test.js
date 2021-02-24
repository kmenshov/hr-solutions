const sc = require('./staircase').main;

beforeEach(() => console.mock('log'));
afterEach(() => console.restore('log'));

test('prints the staircase', () => {
  sc(4);
  expect(console.log.mock.calls.flat()).toEqual(['   #', '  ##', ' ###', '####']);

  console.log.mockClear();
  sc(7);
  expect(console.log.mock.calls.flat()).toEqual(['      #', '     ##', '    ###', '   ####', '  #####', ' ######', '#######']);
});
