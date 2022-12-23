// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input-- > Output)

// 10 -- > 1
// 99 -- > 18
//   - 32 -- > 5
// Let's assume that all numbers in the input will be integer values.
function sumDigits(number) {
  let output = 0;
  const absNumStr = String(Math.abs(number)).split('');
  for (let i = 0; i < absNumStr.length; i++) {
    output += Number(absNumStr[i]);
  }
  return output;
}
