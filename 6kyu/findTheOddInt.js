// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//   Examples
// [7] should return 7, because it occurs 1 time(which is odd).
// [0] should return 0, because it occurs 1 time(which is odd).
// [1, 1, 2] should return 2, because it occurs 1 time(which is odd).
// [0, 1, 0, 1, 0] should return 0, because it occurs 3 times(which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).
function findOdd(A) {
  // Analysis
  // loop through the array A
  // make new arrays containing all the same numbers in each array
  // get the length of each array
  // return number of the array that has odd number of numbers in it.
  var arrCopy = A.slice(0, A.length).sort();
  var tempObj = {};
  var uniqueArray = arrCopy.sort().filter((num, index, array) => {
    return !index || num !== array[index - 1];
  });
  function getOccurence(array, value) {
    var count = 0;
    array.forEach(v => (v === value && count++));
    return count
  }
  for (var i = 0; i < uniqueArray.length; i++) {
    tempObj[uniqueArray[i]] = getOccurence(arrCopy, uniqueArray[i])
  }

  for (var num in tempObj) {
    if (tempObj[num] % 2 !== 0) {
      return Number(num)
    }
  }
}
