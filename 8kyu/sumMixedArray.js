// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
  var output = 0;
  for (var i = 0; i < x.length; i++) {
    output += Number(x[i])
  }
  return output
}
