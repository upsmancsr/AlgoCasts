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

function pyramid(n) {


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
