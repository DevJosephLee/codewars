// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even - odd disparity
function capitalize(s) {
  const sArr = [...s];
  const evenUpp = [];
  const oddUpp = [];
  for (let i = 0; i < sArr.length; i++) {
    if (i % 2) {
      oddUpp.push(sArr[i].toUpperCase());
      evenUpp.push(sArr[i].toLowerCase());
    } else {
      oddUpp.push(sArr[i].toLowerCase());
      evenUpp.push(sArr[i].toUpperCase());
    }
  }
  return [evenUpp.join(''), oddUpp.join('')];
};
