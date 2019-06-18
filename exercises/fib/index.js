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

function fib(n) {
    let fibSeries = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            fibSeries[i] = 0;
        } else if (i === 1) {
            fibSeries[i] = 1;
        } else {
            fibSeries[i] = fibSeries[i - 2] + fibSeries[i - 1];
        }
    }
    console.log(fibSeries);
    return fibSeries[n];

}

module.exports = fib;
