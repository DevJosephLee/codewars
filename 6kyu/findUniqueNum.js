// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number(this kata)
// Find the unique string
// Find The Unique
function findUniq(arr) {
  var numToRemove = 0;
  var output = 0;
  arr.map((num, index, arr) => {
    if (arr.indexOf(num) !== index) {
      numToRemove = num;
    }
  })
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== numToRemove) {
      return arr[i];
    }
  }
}
