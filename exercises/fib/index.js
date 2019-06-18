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
// Solution 1 (iterative):
// ***
// *** Run-time complexity is O(n) linear
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
// *** run-time complexity is O(2^n) EXPONENTIAL
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// ***
// Solution 3 (recursive + functional memoization):
// ***
// *** run-time complexity is O(n) linear ???
// *** This is the fastest (run-time complexity) method for this problem
// *** Memoization improves run-time of recursive solution
// *** by storing the arguments and results of each function call for later reference.
function memoize(fn) {
    const cache = {};
    
    // define anonymous func where number of args is arbitrary, i.e., not declared
    // using (...args) also destructures array of arguments, 
    // so it's needed if args come in as an array, even if it's an array of 1 element
    return function(...args) { 
        
        // If there's an entry in the cache corresponding to args, return that cache value
        if (cache[args]) {
            // console.log(cache);
            return cache[args];
        }
        // else...
        // apply input function fib using args to get result:
        const newResult = fn.apply(null, args);  // fn.apply(this, args) also works
        // store result in the cache:
        cache[args] = newResult;
        // return newResult, ie, return it where fib is called in slowFib
        return newResult;
    };
}

function slowFib(n) {                   // an initial call of fib(n) calls this function
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2); // these recursive calls to fib call memoized fib defined below, not the original fib function
}

fib = memoize(slowFib);


module.exports = fib;
