function alphabetWar(fight) {
  let leftSide = 0;
  let rightSide = 0;
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      leftSide += 4;
    } else if (fight[i] === "p") {
      leftSide += 3;
    } else if (fight[i] === "b") {
      leftSide += 2;
    } else if (fight[i] === "s") {
      leftSide += 1;
    } else if (fight[i] === "m") {
      rightSide += 4;
    } else if (fight[i] === "q") {
      rightSide += 3;
    } else if (fight[i] === "d") {
      rightSide += 2;
    } else if (fight[i] === "z") {
      rightSide += 1;
    }
  }

  if (rightSide > leftSide) {
    return "Right side wins!";
  } else if (rightSide < leftSide) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";
  }
}
