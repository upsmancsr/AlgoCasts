// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // insert method to create and insert a node in the tree in relation to the Node itself
    // ie, in relation to this.data:
    insert(data) {
        
        // data could be less than or greater than this.data
        // if this.left exists, data could be less than or greater than this.left.data
        // if this.right exists, data could be less than or greater than this.right.data
        // etc...

        if (data < this.data) {
            if (this.left) {
                this.left.insert(data);
            } else {
                this.left = new Node(data);
                return;
            }
        } else {
            if (this.right) {
                this.right.insert(data);
            } else {
                this.right = new Node(data);
                return;
            }
        }
    }
}

module.exports = Node;
