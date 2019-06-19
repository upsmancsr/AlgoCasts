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

    // removeFirst method to remove head node and shift head to the next
    removeFirst() {
        // If there is no head, return
        // I added a test for a linked list of size 0.
        // Without the if statement, the function breaks because no this.head.next
        if (!this.head) {  
            return;
        }

        this.head = this.head.next;
        return this.head;
    }
    // removeLast function to remove last node in the LL
    // need to keep track of previous node while traversing the LL
    removeLast() {
        let previousNode = null;
        let node = this.head;

        if (!node || !node.next) {
            return this.head = null;  // return satisfies !node case and this.head = null satisfies !node.next case
            //this.head = null;
            //return this.head = null;;
        } 
        // else if (!node.next) {
        //     this.head = null;
        //     return;
        // }

        while (node.next) {
            previousNode = node;
            node = node.next;
        }

        previousNode.next = null;

    }

    insertLast(data) {
        const newNode = new Node(data, null);

        // if (!this.head) {
        //     this.head = newNode;
        //     return;
        // } 

        // let node = this.head;

        // while (node.next) {
        //     node = node.next;
        // }

        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = newNode;
            return;
        } 
        
        lastNode.next = newNode;

        // * Alternatively:
        // if (lastNode) {
        //     lastNode.next = newNode;
        // } else {
        //     this.head = newNode;

        // }
    }



}

module.exports = { Node, LinkedList };
