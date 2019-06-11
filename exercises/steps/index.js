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
    // loop from 0 to n, for each i print '#' + '' * (n-i) 
    // if (n < 1) {
    //     return '';
    // }

    // let stepsArray = Array(n).fill('');

    // for (let step = 1; step <= n; step++) {
        
    //     for (i of stepsArray) {
    //         stepsArray[i] = '#';
    //     }
    //     return stepsArray;
    // }

    //
    // Model Solution:
    //

    // Step through a range from 0 to n for each row to be printed:
    for (let row = 0; row < n; row++) {
        // at each row, initialize an empty string called 'stair':
        let stair = '';

        // at each row, step through the coulumns from 0 to n:
        for (let column = 0; column < n; column++) {
            // if column <= row, add a '#' to the stair string,
            // else, add a space, ' ':
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        // console.log stair FOR EACH ROW:
        console.log(stair);

    }

}

module.exports = steps;
