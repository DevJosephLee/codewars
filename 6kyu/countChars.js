// The main idea is to count all the occurring characters in a string.If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty ? Then the result should be empty object literal, {}.
function count(string) {
  const strArr = [...string];
  let output = {};
  for (let i = 0; i < strArr.length; i++) {
    if (output.hasOwnProperty(strArr[i])) {
      output[strArr[i]] += 1;
    } else {
      output[strArr[i]] = 1
    }
  }
  return output;
}
