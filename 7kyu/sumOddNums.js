// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle(starting at index 1) e.g.: (Input-- > Output)

// 1 -- > 1
// 2 -- > 3 + 5 = 8
function rowSumOddNumbers(n) {
  return n * (n * n);
}

// 1 => 1
// 2 => 3 + 5 = 8 --- diff 7 (*4)
// 3 => 7 + 9 + 11 = 27 --- diff 19 (*9)
// 4 => 13 + 15 + 17 + 19 = 64 --- diff 37 (*16)
// 5 => 21 + 23 + 25 + 27 + 29 = 125 --- diff 61 (*25)

// n = 1 => 1
// n = 2 => 2 * 4 = 8
// n = 3 => 3 * 9 = 27
// n = 4 => 4 * 16 = 64
// n = 5 => 5 * 25 = 125
// n = 6 => 6 * 36 = 216
