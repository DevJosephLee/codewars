// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

//   Note: input will never be an empty string
function fakeBin(x) {
  var output = [];
  var xSplit = x.split('');
  xSplit.map(x => {
    Number(x) < 5 ? x = '0' : x = '1'
    output.push(x)
  })
  return output.join('');
}
