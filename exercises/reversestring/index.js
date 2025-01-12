// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1:
// function reverse(str) {
//     return reversedString = str.split('').reverse().join('');
// }

// Solution 2:
// function reverse(str) {
//     let reversedString = '';
//     for (let char of str) {
//         reversedString = char + reversedString;
//     }
//     return reversedString;
// }

// Solution 3:
function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
