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

// ***
// Solution 1:
// *** 
// function steps(n) {

//     // Step through a range from 0 to n for each row to be printed:
//     for (let row = 0; row < n; row++) {
//         // at each row, initialize an empty string called 'stair':
//         let stair = '';

//         // at each row, step through the coulumns from 0 to n:
//         for (let column = 0; column < n; column++) {
//             // if column <= row, add a '#' to the stair string,
//             // else, add a space, ' ':
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         // console.log stair FOR EACH ROW:
//         console.log(stair);
//     }

// } // end steps() function

// ***
// Solution 2 (recursive):
// ***

// Give steps func a default row argument to prevent infinite loop,
// and a default stair argument to reset stair to empty string with each recursive call of steps func
function steps(n, row = 0, stair = '') {
    // As the Base Case, check if n is 0:
    if (n === 0) {
        return;
    }


    // If stair.length === n, print stair:
    if (stair.length === n) {
        console.log(stair);
    }


}
   

module.exports = steps;
