// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Use BFT to get width of each level:
function levelWidth(root) {

    // Initialize nodes array to serve as a queue for nodes,
    // and put root at index 0 and 'level' as a separator in index 1:
    const nodes = [root, 'level'];

    // Initialize a widths array to record the width of each level.
    // Put 1 for the root level width, 
    // and 0 for the second level, which also marks which level the while loop starts on:
    const widths = [0];

    // The last element in nodes array should be 'level':
    while (nodes.length > 1) {
        const node = nodes.shift();

        if (node === 'level') {
            widths.push(0);         // Push 0 onto widths array to mark a new level being measured
            nodes.push('level');    // Push 'level' separator onto nodes array because the previous one was shifted off to get node
        } else {
            nodes.push(...node.children);
            widths[widths.length - 1]++;
        }        
    }

    // return the widths array:
    return widths;
}

module.exports = levelWidth;
