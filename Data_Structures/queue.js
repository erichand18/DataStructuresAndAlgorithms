/*
The queue data structure is a linear data structure which follows a first-in, first-out (FIFO) order
in which the operations are performed.

Enqueueing an element is an O(1) time operation.

Dequeueing the first element in an O(1) time operation.
Dequeueing the last element is an O(n) time operation.

Therefore,
 
Insertion: O(1) average
Deletion: O(n) average
*/

class Queue {
  constructor() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
  }

  enqueue(element) {
    this.queue[this.tail++] = element;
  }

  dequeue() {
    //return this.queue.shift();  ===> This method, by using the shift method, is space efficient, but time O(n)

    //check for empty queue
    if (this.head === this.tail) {
      return undefined;
    }

    let elementToDequeue = this.queue[this.head]; //store dequeued element before deleting it
    delete this.queue[this.head++];  //delete the element
    return elementToDequeue; //return the deleted element
  }
}

export default Queue;