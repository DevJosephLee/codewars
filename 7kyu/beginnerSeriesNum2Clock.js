// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//   Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s) {
  // h to m = 60
  // h to m to s = 3600
  // h to m to s to ms = 3600000
  // 1 h = 3600000 ms

  // m to s = 60
  // m to s to ms = 60000
  // 1 m = 60000 ms

  // s to ms = 1000
  // 1 s = 1000 ms

  return (3600000 * h) + (60000 * m) + (1000 * s)
}
