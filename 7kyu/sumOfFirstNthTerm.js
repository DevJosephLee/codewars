// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

//   Series: 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

//   Examples: (Input-- > Output)
// 1 -- > 1 -- > "1.00"
// 2 -- > 1 + 1 / 4 -- > "1.25"
// 5 -- > 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 -- > "1.57"


function SeriesSum(n) {
  // ANALYSIS
  // what needs to happen is there should be an array of numbers, starting from 1, but
  // the number to be added moving forward are 1/4, 1/7, 1/10, 1/13, 1/16...
  // ex) SeriesSum(1) is "1.00"
  // the n number needs to create an array of all the numbers and then add them

  var baz = [];
  var foo = 1;
  for (var i = 4; i < n * 100; i += 3) {
    baz.push(1 / i)
  }
  if (n === 1) {
    return "1.00";
  } else if (n === 0) {
    return "0.00";
  } else {
    for (var j = 0; j < n - 1; j++) {
      foo += baz[j]
    }
    return String((Math.round(100 * foo) / 100).toFixed(2))
  }
}
