exports.prompts = [
  ['Enter the staircase\'s size: ', parseInt],
];

exports.main = (n) => {
  for (let i = 1; i <= n; i++) console.log(' '.repeat(n - i) + '#'.repeat(i));
};
