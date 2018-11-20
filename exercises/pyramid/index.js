// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  colNum = 2 * n - 1;
  poundNum = 1;
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < (colNum - poundNum) / 2; j++) {
      row += ' ';
    }
    for (let k = 0; k < poundNum; k++) {
      row += '#';
    }
    for (let l = 0; l < (colNum - poundNum) / 2; l++) {
      row += ' ';
    }
    console.log(row);
    poundNum += 2;
  }
}

module.exports = pyramid;
