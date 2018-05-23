class Stack {
  constructor() {
    this.data = [];
 }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peak() {
    return this.data[this.data.length-1];
  }
}

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
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  enqueue(record) {
    this.first.push(record);
  }
  dequeue() {
    while (this.first.peak()) {
      this.second.push(this.first.pop());
    }
    const result = this.second.pop();
    while (this.second.peak()) {
      this.first.push(this.second.pop());
    }
    return result;
  }
  peak() {
    while (this.first.peak()) {
      this.second.push(this.first.pop());
    }
    const result = this.second.peak();
    while (this.second.peak()) {
      this.first.push(this.second.pop());
    }
    return result;
  }
}
