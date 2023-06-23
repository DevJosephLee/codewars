// Complete the solution so that the function will break up camel casing, using a space between words.

//   Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""
function solution(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    string[i] === string[i].toUpperCase() ? output += " " + string[i] : output += string[i];
  }
  return output;
}
