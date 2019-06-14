// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Notes:
// Use RegExp syntax to disregard punctuation and spaces
// Use .toLowercase to disregard capitalization
    // example:
    // const word = "HI THERE!"
    // word.replace(/[^\w]/g, "").toLowerCase();
    // returns "hithere"
// Create a character map for each word to compare
// Check that each word has the same count for each letter
// Also check if there are any letters in one word that are not present in the other word
    // Option 1: compare lengths of each character map object
    // Option 2: compare lengths of each word

// ***
// Solution 1 (character map):
// ***
// function anagrams(stringA, stringB) {
//     // Convert input strings to RegExp:
//     const stringARegExp = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const stringBRegExp = stringB.replace(/[^\w]/g, "").toLowerCase();
//     console.log('stringARegExp:', stringARegExp);

//     // Compare lengths of RegExp strings:
//     if (stringA.length !== stringB.length) {
//         return false;
//     }

//     // Create map objects to count character counts for both input strings:
//     let stringAMap = {};
//     for (char of stringARegExp) {
//         if (stringAMap[char]) {
//             stringAMap[char]++;
//         } else {
//             stringAMap[char] = 1;
//         }
//     }

//     let stringBMap = {};
//     // for (char of stringBRegExp) {
//     //     if (stringBMap[char]) {
//     //         stringBMap[char]++;
//     //     } else {
//     //         stringBMap[char] = 1;
//     //     }
//     // }
//     // Alternative way to increment character counts:
//     for (char of stringBRegExp) {
//         stringBMap[char] = stringBMap[char] + 1 || 1;
//     }

//     for (char of stringARegExp) {
//         if (stringAMap[char] !== stringBMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// ***
// Solution 2 (sort):
// ***
function anagrams(stringA, stringB) {
    // Convert input strings to sorted strings:
    const stringASorted = sortString(stringA);
    const stringBSorted = sortString(stringB);
    console.log('stringASorted:', stringASorted);
    console.log('stringBSorted:', stringBSorted);
    if (stringASorted !== stringBSorted) {
        return false;
    }
    return true;
}

function sortString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
