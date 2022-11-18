// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).The next words should be always capitalized.

//   Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str) {
  if (!str) return '';

  var unify = str.replace(/_/g, '-');
  var strSplit = unify.split('-');
  var nonFirstWords = '';
  for (var i = 1; i < strSplit.length; i++) {
    nonFirstWords += strSplit[i][0].toUpperCase() + strSplit[i].slice(1);
  }

  return strSplit[0] + nonFirstWords;
}
