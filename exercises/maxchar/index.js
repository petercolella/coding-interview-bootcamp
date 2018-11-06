// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   charCount = 0;
//   charIndexCount = 0;
//   for (let char of str) {
//     charCountMax = char;
//     // charIndexCount = 0;
//     for (let charIndex of str) {
//       if (charIndex === char) {
//         charIndexCount++;
//         charCount = charIndexCount;
//       }
//       if (charIndexCount > charCount) {
//         // charCount = charIndexCount;
//         charCountMax = charIndex;
//       }
//       console.log(char, charIndex, charIndexCount, charCountMax);
//     }
//   }
//   console.log('finalCharCountMax: ', charCountMax);
//   return charCountMax;
// }

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
}

maxChar('abcccccccd');

module.exports = maxChar;
