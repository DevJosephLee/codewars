// Build Tower
// Build a pyramid - shaped tower given a positive integer number of floors.A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
function towerBuilder(nFloors) {
  var output = ["*"];
  var spaces = [];
  var numOfStarsNext = 0;
  var totalNextStars = [];
  var spacesArr = [];
  var finalArrToAdd = [];
  if (nFloors === 1) {
    return ["*"]
  } else {
    for (var i = 2; i <= nFloors; i++) {
      spaces.push(' ');
      output = [`${[spaces.join('')]}*${[spaces.join('')]}`];
      numOfStarsNext = i * 2 - 1;
      var nextStars = '*'.repeat(numOfStarsNext);
      for (var j = 1; j < i; j++) {
        totalNextStars.push(nextStars);
      }
    }
    let uniqueChars = totalNextStars.filter((stars, index) => {
      return totalNextStars.indexOf(stars) === index;
    });
    for (var k = uniqueChars.length - 2; k >= -1; k--) {
      var spaceForNextStars = ' '.repeat(k + 1);
      spacesArr.push(spaceForNextStars);
    }
    for (var l = 0; l < uniqueChars.length; l++) {
      finalArrToAdd.push(`${spacesArr[l]}${uniqueChars[l]}${spacesArr[l]}`);
    }
    output = [...output, ...finalArrToAdd]
  }
  return output
