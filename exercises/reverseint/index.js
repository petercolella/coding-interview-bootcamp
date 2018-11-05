// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n >= 0) {
//     return Number(
//       n
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     );
//   } else {
//     return (
//       -1 *
//       Number(
//         n
//           .toString()
//           .split('')
//           .slice(1)
//           .reverse()
//           .join('')
//       )
//     );
//   }
// }

// function reverseInt(n) {
//   return (
//     Math.sign(n) *
//     parseInt(
//       n
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     )
//   );
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

// console.log(reverseInt(189));

module.exports = reverseInt;
