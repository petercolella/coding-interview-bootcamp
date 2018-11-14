// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const words = str.split(' ');
//   const newArr = [];

//   for (let word of words) {
//     let firstCharCap = word.charAt(0).toUpperCase();
//     let wordNoFirstChar = word.slice(1);
//     let newWord = `${firstCharCap}${wordNoFirstChar}`;
//     newArr.push(newWord);
//   }

//   return newArr.join(' ');
// }

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;
