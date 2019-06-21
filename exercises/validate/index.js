// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


// validate function takes a node and validates that the tree is structured correctly,
// ie, lesser values to the lest and greater values to the right
// Remember to keep track of min and max for the whole tree,
// and compare each node to the min and max, rather than the parent node value

function validate(node, min = null, max = null) {

    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;

    // if (node.left) {
    //     if (node.left.data > min) {
    //         return false;
    //     } 
    //     // min = node.left.data;
    //     return validate(node.left, node.data, max);
    // }

    // if (node.right) {
    //     if (node.right.data < max) {
    //         return false;
    //     } 
    //     //max = node.right.data;
    //     return validate(node.right, min, node.data);
    // } 