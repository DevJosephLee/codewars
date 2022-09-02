// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  var output = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
      output.push(s[i])
    }
  }
  return output.join('');
}
