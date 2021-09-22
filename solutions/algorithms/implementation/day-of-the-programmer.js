const { parseInt10 } = require('../../../shared/utils');

exports.prompts = [
  ['Input a year: ', parseInt10],
];

exports.main = (year) => {
  if (year === 1918) return '26.09.1918';

  const isLeapYear = (y) => (y <= 1917 ?
    y % 4 === 0 :
    y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0));

  const day = isLeapYear(year) ? 12 : 13;

  return `${day}.09.${year}`;
};
