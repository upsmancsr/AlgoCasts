// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    // Define a class method for adding a record to the START of the data array:
    add(record) {
        this.data.unshift(record);
    }

    // Define a class method for removing a record from the END of the data array
    // and return the record:
    remove() {
        return this.data.pop();
    }

}

module.exports = Queue;
