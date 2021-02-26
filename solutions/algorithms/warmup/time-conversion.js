exports.prompts = [
  ['Enter the AM/PM time: '],
];

// Constraints: All input times are valid
exports.main = (s) => {
  const timeArr = [0, 2, -2].map((charPos, i, charPoses) => s.slice(charPos, charPoses[i + 1]));

  if (timeArr[0] === '12') {
    if (timeArr[2].toUpperCase() === 'AM') timeArr[0] = '00';
  } else if (timeArr[2].toUpperCase() === 'PM') {
    timeArr[0] = (parseInt(timeArr[0], 10) + 12).toString().padStart(2, '0');
  }

  return timeArr[0] + timeArr[1];
};
