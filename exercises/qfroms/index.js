// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
// * Stack methods are push, pop, and peek

// A Queue needs to follow *FIFO* ordering
class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    // add method needs to add a record to the end of stackA:
    add(record) {
        this.stackA.push(record);
    }

    // remove method:
    remove() {
        console.log(this.stackA, this.stackB);

        // While stackA has at least one record, remove (pop) the ending record and push it to the end of stackB.
        // After this while loop runs, stackB will be a reverse copy of stackA, and stackA will be empty:
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }
        console.log(this.stackA, this.stackB);

        // Remove (pop) the record at the end of stackB and store it for later.
        // this should be the first record that was added to the Queue:
        const record = this.stackB.pop();
        console.log(this.stackA, this.stackB, record);

        // While stackB has at least one record, remove (pop) the end record and push it to the end of stackA.
        // After this while loop runs, stackA will be in its original form, less the starting record.
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }
        console.log(this.stackA, this.stackB);
        // return the record stored earlier
        return record;
    }

    peek() {
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }

        const record = this.stackB.peek();

        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }

        return record;
    }
}

module.exports = Queue;
