// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let sumArr = [0, 1];
//     for (i = 2; i <= n; i++) {
//         sumArr.push(sumArr[i - 2] + sumArr[i - 1]);
//     }

//     return sumArr[n];
// }

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }

//   return result[n];
// }

// function fib(n, result = [0, 1], count = 2) {
//   if (result.length < n + 1) {
//     const a = result[count - 1];
//     const b = result[count - 2];
//     result.push(a + b);
//     count++;

//     return fib(n, result, count);
//   } else {
//     return result[n];
//   }
// }

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
