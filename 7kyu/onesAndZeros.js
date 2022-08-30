// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//   Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = arr => {
  // first make another array containing all the possible numbers to be added
  // get the index that has 1 in arr
  // with the indexes gained from arr, add all the numbers of indexes in binary values to be added.
  var binaryValues = [1];
  var realBinaryValues = [];
  var binaryNums = 1;
  var valuesToAdd = [];
  var output = 0;
  for (var i = 1; i < arr.length; i++) {
    binaryNums *= 2;
    binaryValues.push(binaryNums);
  }
  for (var j = binaryValues.length - 1; j >= 0; j--) {
    realBinaryValues.push(binaryValues[j])
  }
  for (var h = 0; h < arr.length; h++) {
    if (arr[h] === 1) {
      output += realBinaryValues[h]
    }
  }
  return output
};
