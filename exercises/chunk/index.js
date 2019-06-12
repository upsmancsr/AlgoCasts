// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // initialize an empty array to hold the chunks:
    let chunkedArray = [];
    // loop through each value in the input array:
    for (value of array) {
        // If there are no chunks in chunkedArray,
        // or if the last chunk in chunkedArray has length === size,
        // push a new array containing the current value into chunkedArray
        if (!chunkedArray[chunkedArray.length - 1] || chunkedArray[chunkedArray.length - 1].length === size) {
            chunkedArray.push([value]);
        } else { // push the current value into the last chunk
            chunkedArray[chunkedArray.length - 1].push(value);
        }
    }
    return chunkedArray;
}

module.exports = chunk;
