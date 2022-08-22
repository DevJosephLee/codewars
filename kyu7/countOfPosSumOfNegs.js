// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//   Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  var output = [0, 0];
  var pos = [];
  var negs = [];
  var negSum = 0;
  if (input === null) {
    return new Array();
  } else if (input.length === 0) {
    return new Array();
  } else {
    for (var i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        pos.push(input[i])
      } else {
        negs.push(input[i])
      }
    }
  }

  for (var j = 0; j < negs.length; j++) {
    negSum += negs[j]
  }
  output[0] = pos.length;
  output[1] = negSum;
  return output;
}
