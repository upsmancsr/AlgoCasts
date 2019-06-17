// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // Create empty array of arrays to hold final matrix:
    // const matrix = Array(n).fill([]);
    let matrix = new Array(n).fill().map(() => new Array(n).fill(''));
    // const matrix = [];
    // for (let i = 0; i < n; i++) {
    //     matrix.push([]);
    // }
    console.log(matrix);
    // Create counter variable to track current number to be placed in matrix:
    let counter = 1;
    // Create start column and end column:
    let startColumn = 0;
    let endColumn = n - 1;
    // Create start row and end row:
    let startRow = 0;
    let endRow = n - 1;
    
    while (startRow <= endRow && startColumn <= endColumn) {
        // 4 for-loops:
            // startColumn to endColumn (top edge)
                // increment startRow
            // startRow to endRow       (right edge)
                // decrement endColumn ?
            // endColumn to startColumn (bottom edge)
                // decrement endRow ?
            // endRow to startRow       (left edge)
                // increment startColumn ?
        
        // top edge:
        for (let i = startColumn; i <= endColumn; i++) {
            // console.log('counter:', counter);
            matrix[startRow][i] = counter;
            counter++;
            console.log(matrix);
        }
        console.log('matrix after top edge:', matrix);
        startRow++;

        // right edge:
        for (let i = startRow; i <= endRow; i++) {
            // console.log('counter:', counter);
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        console.log('matrix after right edge:', matrix);

        // bottom edge:
        for (let i = endColumn; i >= startColumn; i--) {
            // console.log('counter:', counter);
            matrix[endRow][i] = counter;
            counter++;
            console.log(matrix);
        }
        console.log('matrix after bottom edge:', matrix);
        endRow--;

        // left edge:
        for (let i = endRow; i >= startRow; i--) {
            // console.log('counter:', counter);
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
        console.log('matrix after right edge:', matrix);

    }
    console.log(matrix);
    return matrix;

}

module.exports = matrix;
