// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const reversedStr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr.push(str[i]);
//   }
//   console.log(reversedStr);
//   const result = reversedStr.join('');
//   console.log(result);
//   return result;
// }

// function reverse(str) {
//   const strArr = str.split('');
//   strArr.reverse();
//   return strArr.join('');
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

function reverse(str) {
  let reversedStr = '';

  for (let character of str) {
    reversedStr = character + reversedStr;
  }

  return reversedStr;
}

const word = 'apple';

reverse(word);

module.exports = reverse;
