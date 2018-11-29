// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let sumArr = [0, 1];
    for (i = 2; i <= n; i++) {
        sumArr.push(sumArr[i - 2] + sumArr[i - 1]);
    }

    return sumArr[n];
}

module.exports = fib;
