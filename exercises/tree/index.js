// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // add method accepts data as arg and creates a child Node 
    // and adds it to this.children:
    add(childData) {
        this.children.push(new Node(childData));
    }

    // remove method accepts data and removes all children with that data:
    // user filter() on children array to return all children that do not have data === childData:
    remove(childData) {
        this.children = this.children.filter(childNode => {
            return childNode.data !== childData;
        });
    }

}

class Tree {}

module.exports = { Tree, Node };
