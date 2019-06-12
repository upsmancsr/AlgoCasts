// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let characterCounts = {};

    for (let char of str) {
        if (characterCounts[char]) {
            characterCounts[char] += 1;
        } else {
            characterCounts[char] = 1;
        }
    }
    console.log(characterCounts);

    let max = 0;
    let maxCharacter = '';
    for (let char in characterCounts) {
        if (characterCounts[char] > max) {
            max = characterCounts[char];
            maxCharacter = char;
        }
    }
        
    console.log('max character is', maxCharacter);
    return maxCharacter;


//     // Solution to return array of all characters with max counts
//     // in case there are multiple characters with max counts:
//     const maxChars = Object.keys(characterCounts).filter(x => {
//         return characterCounts[x] == Math.max.apply(null, 
//         Object.values(characterCounts));
//     });
//     return maxChars;
}

// maxChar("abcccccccddddddd");

module.exports = maxChar;