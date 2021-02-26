const { parseIntString } = require('../../../shared/utils');

exports.prompts = [
  ['Provide a space-separated array of integers: ', parseIntString],
];

exports.main = (grades) => grades.map((grade) => {
  if (grade < 38) return grade;
  const remainder = grade % 5;
  return remainder > 2 ? grade + 5 - remainder : grade;
});
