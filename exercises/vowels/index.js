// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // Create an array containging all vowels:
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Initialize a count starting at 0 to count all vowels in str:
    let vowelCount = 0;
    // Loop through all characters in str and increment str when a vowel is found:
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount;
}

module.exports = vowels;
