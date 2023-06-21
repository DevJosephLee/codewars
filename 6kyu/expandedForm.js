// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!
function expandedForm(num) {
  let expandedForm = "";

  function generateZeros(numOfZeros) {
    let zeros = "";
    for (let i = 0; i < numOfZeros; i++) {
      zeros += "0";
    }
    return zeros;
  }

  String(num).split('').map((num, i, arr) => {
    num !== "0" ? expandedForm += (num + generateZeros(arr.length - (i + 1))) + " + " : "";
  })

  return expandedForm.slice(0, expandedForm.length - 3);
}
