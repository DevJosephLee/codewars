// Complete the method which returns the number which is most frequent in the given input array.If there is a tie for most frequent number, return the largest number among them.

//   Note: no empty arrays will be given.

//     Examples
//   [12, 10, 8, 12, 7, 6, 4, 10, 12]-- > 12
//   [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]-- > 12
//   [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]-- > 3

function highestRank(arr) {
  const obj = {};
  arr.forEach(number => {
    if (obj[number]) {
      obj[number]++
    } else {
      obj[number] = 1;
    };
  });

  const array = Object.values(obj);
  const highestOccurence = []
  for (number in obj) {
    if (obj[number] === Math.max(...array)) {
      highestOccurence.push(number);
    }
  }

  return Math.max(...highestOccurence);
}
