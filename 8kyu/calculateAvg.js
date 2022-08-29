// Write a function which calculates the average of the numbers in a given list.

//   Note: Empty arrays should return 0.
function find_average(array) {
  let avg = 0;
  let sum = 0;
  if (array === []) {
    return false
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
      avg = sum / array.length
    }
  }
  return avg
}
