function parseIntString(spaceSeparatedIntegersString: string) {
  return spaceSeparatedIntegersString.split(' ').map((i) => parseInt(i, 10));
}

function mapStringsToResults(arrayOfStrings: string[], cb: (...args: any[]) => unknown) {
  if (arrayOfStrings[arrayOfStrings.length - 1].length <= 0) arrayOfStrings.pop();
  arrayOfStrings.shift();
  return arrayOfStrings.map((str) => cb(parseIntString(str)));
}

// mapStringsToResults(inputLines, main).forEach((r) => console.log(r));

export { parseIntString, mapStringsToResults };
