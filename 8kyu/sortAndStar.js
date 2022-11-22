// You will be given a list of strings.You must sort it alphabetically(case -sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from / to the array.
function twoSort(s) {
  const sSortedFirstSplit = s.sort()[0].split('');
  const output = [];
  for (let i = 0; i < sSortedFirstSplit.length; i++) {
    output.push(sSortedFirstSplit[i] + '***');
  }
  return output.join('').slice(0, output.join('').length - 3);
}
