// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // if (n === 0) {
    //     return 0;
    // } else if (n > 0) {
    //     const reversedString = n.toString().split('').reverse().join('');
    //     const reversedInt = parseInt(reversedString);
    //     return reversedInt;
    // } else {
    //     const positiveN = n * -1;
    //     const reversedString = positiveN.toString().split('').reverse().join('');
    //     const reversedInt = parseInt(reversedString) * -1;
    //     return reversedInt;
    // }

    // Concise solution:
    const reversedString = n.toString().split('').reverse().join('');
    return parseInt(reversedString) * Math.sign(n);
    
}

module.exports = reverseInt;
