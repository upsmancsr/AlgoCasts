// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ***
// Solution 1:
// ***
// function capitalize(str) {
//     let strArray = str.split('');
//     console.log(strArray);
//     strArray[0] = strArray[0].toUpperCase();
//     for (let i = 0; i < strArray.length; i++) {
//         console.log(strArray[i]);
//         if (strArray[i] === ' ') {
//             strArray[i + 1] = strArray[i + 1].toUpperCase();
//         }
//     }
//     console.log(strArray.join(''));
//     return strArray.join('');
// }

// ***
// Solution 2 (slice):
// ***
function capitalize(str) {
    // split input string at each space, creating an array of arrays,
    // where each array is a word
    let wordsArray = str.split(' ');
    console.log(wordsArray);
    let capitalWordsArray = [];

    for (let word of wordsArray) {
        capitalWordsArray.push(word[0].toUpperCase() + word.slice(1));
        console.log(word);
    }
    console.log(capitalWordsArray.join(' '));
    return capitalWordsArray.join(' ');
}

module.exports = capitalize;
