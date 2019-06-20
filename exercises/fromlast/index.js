// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = fast = list.getFirst();

    // While loop to advance fast by n nodes:
    while (n > 0) {
        fast = fast.next;   // advance fast by one node
        n--;                // decrement n by one
    }

    // Continue advancing fast and slow as long as there is a fast.next
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Return slow, which is n nodes behind fast
    return slow;
}

module.exports = fromLast;
