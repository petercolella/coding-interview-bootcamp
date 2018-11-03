// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// function palindrome(str) {
//   if (reverse(str) === str) {
//     return true;
//   }
//   return false;
// }

function palindrome(str) {
  return reverse(str) === str;
}

module.exports = palindrome;
