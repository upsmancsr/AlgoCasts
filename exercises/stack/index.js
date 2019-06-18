// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    // push method to add record to the "top" of the stack:
    push(record) {
        this.data.unshift(record);
    }

    // pop method to remove record from the "bottom" of the stack:
    pop() {
        return this.data.shift();
    }

    // peek method to return but not remove element at "top" of stack:
    peek() {
        return this.data[0];
    }

}

module.exports = Stack;
