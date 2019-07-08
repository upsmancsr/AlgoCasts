// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Notes:
// n is the number of LEVELS, not the number of STEPS
// for n rows, the number of columns equals (n * 2) - 1

// Solution 1:
// function pyramid(n) {


//     const midpoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let stringToPrint = '';

//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 stringToPrint += '#';
//             } else {
//                 stringToPrint += ' ';
//             }
//         }
//         console.log(stringToPrint);
//     }

// }

// Solution 2:
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
      }
    
      const midpoint = Math.floor((2 * n - 1) / 2);
      let add;
      if (midpoint - row <= level.length && midpoint + row >= level.length) {
        newChar = '#';
      } else {
        newChar = ' ';
      }
      pyramid(n, row, level + newChar);

}

console.log(pyramid(3));

module.exports = pyramid;
