// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let spaceIteration = n - i;
    let poundArr = [];
    let spaceArr = [];
    for (let j = 0; j < i; j++) {
      poundArr.push('#');
    }
    for (let k = 0; k < spaceIteration; k++) {
      spaceArr.push(' ');
    }
    console.log(`${poundArr.join('')}${spaceArr.join('')}`);
  }
}

module.exports = steps;
