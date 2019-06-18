// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// *** Notes:
// Where instructions say "Print out the n-th entry", assume entries start at n=0

// ***
// Solution 1 (interative):
// ***
// function fib(n) {
//     let fibSeries = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         fibSeries[i] = fibSeries[i - 2] + fibSeries[i - 1];
//     }
//     // console.log(fibSeries);
//     return fibSeries[n];

// }

// ***
// Solution 2 (recursive):
// ***
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }
// *** NOTE: Basic recursive solution has O(2^n) EXPONENTIAL run-time complexity

// ***
// Solution 2 (recursive + momoization):
// ***
function fib(n) {
    // console.log('fib called with n = ', n);
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
// *** NOTE: Basic recursive solution has O(2^n) EXPONENTIAL run-time complexity

module.exports = fib;
