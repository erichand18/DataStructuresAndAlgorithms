/*
The stack data structure is a linear data structure which follows a first-in, last-out (FILO) order
in which the operations are performed.

Popping the top element from the stack is an O(1) time operation.
Popping the bottom element from the stack is an O(n) time operation.

Pushing onto the stack is an O(1) time operation.

Therefore,
 
Insertion: O(1) average
Deletion: O(n) average
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop(element);
  }
}

export default Stack;