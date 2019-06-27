// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Each function accepts an array arg and returns an array sorted from least to greatest.

function bubbleSort(arr) {

    // for loop over length of arr:
    for (let i = 0; i < arr.length; i++) {
        // at each element i, for loop from 0 to i (or: 0 to arr.length - 1):
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                greater = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = greater;
            }
        }
    }

    // return the sorted array:
    console.log(arr);
    return arr;
}

function selectionSort(arr) {
    // for loop over length of arr:
    for (let i = 0; i < arr.length; i++) {
        // at each element i, for loop from 0 to i (or: 0 to arr.length - 1):
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                greater = arr[indexOfMin];
                arr[indexOfMin] = arr[j];
                arr[j] = greater;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // middle index:
    const midPoint = Math.floor(arr.length / 2);

    const left = arr.slice(0, midPoint);

    const right = arr.slice(midPoint);

    merge(mergeSort(left), mergerSort(right));
    
}

// merge function merges two sorted arrays into one sorted array
function merge(left, right) {
    // initialize result array
    const result = [];
    // While there are elements in both left and right arrays:
    while (left.length && right.length) {
        // If the first element of left is less than the first element of right:
        if (left[0] < right[0]) {
            // shift the element from left and push into result array (ie, put it at first index of result array):
            result.push(left.shift());
        } else {
            // shift the element from right and push into result array (ie, put it at first index of result array):
            result.push(right.shift());
        }     
    }
    
    // push any remaining elements from left or right onto result array and return result array:
    return [...result, ...left, ...right];

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr;
//       }
    
//       const center = Math.floor(arr.length / 2);
//       const left = arr.slice(0, center);
//       const right = arr.slice(center);
    
//       return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     const results = [];
  
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         results.push(left.shift());
//       } else {
//         results.push(right.shift());
//       }
//     }
  
//     return [...results, ...left, ...right];
// }
