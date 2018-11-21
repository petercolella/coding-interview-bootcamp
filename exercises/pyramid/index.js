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

// function pyramid(n) {
//   colNum = 2 * n - 1;
//   poundNum = 1;
//   for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < (colNum - poundNum) / 2; j++) {
//       row += ' ';
//     }
//     for (let k = 0; k < poundNum; k++) {
//       row += '#';
//     }
//     for (let l = 0; l < (colNum - poundNum) / 2; l++) {
//       row += ' ';
//     }
//     console.log(row);
//     poundNum += 2;
//   }
// }

// function pyramid(n) {
//   let colNum = 2 * n - 1;
//   let poundNum = 1;
//   for (let i = 0; i < n; i++) {
//     let spaceNum = (colNum - poundNum) / 2;
//     let row = '';
//     for (let colChar = 0; colChar < colNum; colChar++) {
//       if (colChar < spaceNum) {
//         row += ' ';
//       } else if (colChar >= spaceNum && colChar < poundNum + spaceNum) {
//         row += '#';
//       } else {
//         row += ' ';
//       }
//     }
//     poundNum += 2;
//     console.log(row);
//   }
// }

// function pyramid(n) {
//   const colNum = 2 * n - 1;
//   let poundNum = 1;
//   for (let i = 0; i < n; i++) {
//     let spaceNum = (colNum - poundNum) / 2;
//     let row = '';
//     for (let colChar = 0; colChar < colNum; colChar++) {
//       colChar < spaceNum || colChar >= poundNum + spaceNum
//         ? (row += ' ')
//         : (row += '#');
//     }
//     poundNum += 2;
//     console.log(row);
//   }
// }

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  const add =
    midpoint - row <= level.length && midpoint + row >= level.length
      ? '#'
      : ' ';
  pyramid(n, row, level + add);
}

module.exports = pyramid;
