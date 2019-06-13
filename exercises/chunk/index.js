// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// ***
// Solution 1:
// ***

// function chunk(array, size) {
//     // initialize an empty array to hold the chunks:
//     let arrayOfChunks = [];
//     // loop through each value in the input array:
//     for (value of array) {
//         // If there are no chunks in chunkedArray,
//         // or if the last chunk in chunkedArray has length === size,
//         // push a new array containing the current value into chunkedArray
//         if (!arrayOfChunks[arrayOfChunks.length - 1] || arrayOfChunks[arrayOfChunks.length - 1].length === size) {
//             arrayOfChunks.push([value]);
//         } else { // push the current value into the last chunk
//             arrayOfChunks[arrayOfChunks.length - 1].push(value);
//         }
//     }
//     return arrayOfChunks;
// }

// ***
// Solution 2 (slice):
// ***

// function chunk(array, size) {
//     // initialize an empty array to hold the chunks:
//     let arrayOfChunks = [];
//     // initialize starting index at 0 to start the while loop:
//     let index = 0;
//     // while loop from starting index to array.length
//     while (index < array.length) {
//         // push an array from input array with length === size into arrayOfChunks
//         arrayOfChunks.push(array.slice(index, index + size));
//         // increment index by size so next loop starts after last chunk
//         index += size;
//     }
//     return arrayOfChunks;2
// }

// ***
// Solution 3 (splice):
// ***

function chunk(array, size) {
    // initialize an empty array to hold the chunks:
    let arrayOfChunks = [];
    // initialize a copy of input array on which to perform splicing:
    let arrayCopy = [...array];

    // while loop while arrayCopy.length > 0
    // with each splice, arrayCopy with become shorter:
    while (arrayCopy.length > 0) {
        // push a spliced array from arrayCopy with length === size into arrayOfChunks
        arrayOfChunks.push(arrayCopy.splice(0, size));
    }
    return arrayOfChunks;2
}

module.exports = chunk;
