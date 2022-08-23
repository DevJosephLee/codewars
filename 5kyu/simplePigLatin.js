// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

//   Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
  var strSplit = str.split(' ');
  var output = []
  for (var i = 0; i < strSplit.length; i++) {
    output.push(strSplit[i].slice(1) + strSplit[i][0] + 'ay')
  }
  if (output[output.length - 1] === '!ay') {
    output[output.length - 1] = '!'
  } else if (output[output.length - 1] === '?ay') {
    output[output.length - 1] = '?'
  }
  return output.join(' ')
}
