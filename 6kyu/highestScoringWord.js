// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x) {
  var analysis = {};
  var words = x.split(' ');
  var ptValuesOfWords = [];
  var arrayOfNums = [];
  var arrayOfNumsTwo = []
  var tester = 0;
  var output = '';
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    var ptValues = x.charCodeAt(i) - 96;
    arrayOfNums.push(ptValues)
  }
  for (var j = 0; j < arrayOfNums.length; j++) {
    tester += arrayOfNums[j];
    if (arrayOfNums[j] === -64) {
      tester = 0;
    }
    arrayOfNumsTwo.push(tester)
  }
  for (var h = 0; h < arrayOfNumsTwo.length; h++) {
    if (arrayOfNumsTwo[h] === 0) {
      ptValuesOfWords.push(arrayOfNumsTwo[h - 1]);
    }
  }
  ptValuesOfWords.push(arrayOfNumsTwo[arrayOfNums.length - 1]);
  for (var k = 0; k < words.length; k++) {
    analysis[words[k]] = ptValuesOfWords[k]
  }
  for (var word in analysis) {
    count++
    if (Math.max(...ptValuesOfWords) === analysis[word]) {
      output = word;
    }
  }
  if (count === 2 && analysis[Object.keys(analysis)[0]] === analysis[Object.keys(analysis)[1]]) {
    return Object.keys(analysis)[0]
  } else {
    return output
  }
}
