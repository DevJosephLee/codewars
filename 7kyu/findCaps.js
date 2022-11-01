// Instructions
// Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.

//   Example
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);
var capitals = function (word) {
  var output = [];
  word.split('').map(letters => {
    if (letters === letters.toUpperCase()) {
      output.push(word.indexOf(letters));
    }
  })
  return output;
};
