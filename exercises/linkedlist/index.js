// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Note on direction of list and "next" convention:
// "next" points in descending order, e.g., given nodes n1 and n2, n2.next is n1, and n1.next is null


class Node {
    // constructor function is called with 2 args, 'data' and 'next':
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // By default a new LinkedList has no head
    }

    // insertFirst method to replace head node with new node that points to previous head ad next:
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // size method to return the number of nodes in the LL:
    size() {
        let counter = 0;

        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    // getFirst method to return first node (head):
    getFirst() {
        return this.head;
    }

    // getLast method to return the last node (tail):
    getLast() {

        let node = this.head;

        if (!node) {
            return null;
        }

        while (node.next) {
            node = node.next;
        }
        
        return node;
    }

    // clear method to clear the linked list
    // ie, if size method is called it returns 0:
    clear() {
        this.head = null;
    }




}

module.exports = { Node, LinkedList };
