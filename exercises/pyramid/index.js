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
// each level after level 1 adds 2 '#' symbols

// example: pyramid(3)
// row 1 prints (' ' * (n - 1)) + ('#' * (n - (n - 1))) + (' ' * (n -1))
// row 2 prints (' ' * (n - 2)) + ('#' * (n - (n - 2))) + (' ' * (n -2))
// row 3 prints (' ' * (n - 3)) + ('#' * (n - (n - 3))) + (' ' * (n -3))
// substituting r (aka 'row'):
// row r prints (' ' * (n - r)) + ('#' * (n - (n - r))) + (' ' * (n - r))
// where n is constant and r increments by 1 with each additional row



function pyramid(n) {
    // for (let row = 1; row < n + 1; row++) {

    //     console.log('Row', row);

    //     // let stringToPrint = 
    //     //     Array(n - row).join(' ')
    //     //     .concat(Array(row).join('#'))
    //     //     .concat(Array(n - row).join(' '));

    //     let spaceString = Array(n - (row - 1)).join('-');
    //     console.log('spaceString:', spaceString);

    //     let poundString = Array(row + 1).join('#');
    //     console.log('poundString:', poundString);

    //     let fullString = spaceString.concat(poundString);

    //     console.log('fullString:', fullString);
    // }

    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let stringToPrint = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                stringToPrint += '#';
            } else {
                stringToPrint += ' ';
            }
        }
        console.log(stringToPrint);
    }

}

console.log(pyramid(3));

module.exports = pyramid;
