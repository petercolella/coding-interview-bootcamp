// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    charIndexMax = 0;
    for (let charIndex of str) {
      if (charIndex === char) {
        charIndexMax++;
      }
      if (charIndexMax > max) {
        max = charIndexMax;
        maxChar = charIndex;
      }
    }
  }

  return maxChar;
}

// function maxChar(str) {
//   const chars = {};
//   let max = 0;
//   let maxChar = '';
//   for (let char of str) {
//     // if (!chars[char]) {
//     //   chars[char] = 1;
//     // } else {
//     //   chars[char]++;
//     // }
//     chars[char] = chars[char] + 1 || 1;
//   }

//   for (let charsProp in chars) {
//     if (chars[charsProp] > max) {
//       max = chars[charsProp];
//       maxChar = charsProp;
//     }
//   }

//   return maxChar;
// }

maxChar('abcccccccd');

module.exports = maxChar;
