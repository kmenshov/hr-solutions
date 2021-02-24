global.benchmark = require('./benchmark');

// create console mock
const pseudoPrivatePrefix = '__#_';
console.mock = function mock(methodName) {
  this[`${pseudoPrivatePrefix}${methodName}`] = this[methodName];
  this[methodName] = jest.fn();
};
console.restore = function mock(methodName) {
  this[methodName] = this[`${pseudoPrivatePrefix}${methodName}`];
};
