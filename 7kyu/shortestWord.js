// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(s) {
  const sSplit = s.split(' ');
  const wordLengths = [];
  for (let i = 0; i < sSplit.length; i++) {
    wordLengths.push(sSplit[i].length);
  }
  return Math.min(...wordLengths);
}
