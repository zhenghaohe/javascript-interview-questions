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
  peak(){
    return this.data[this.data.length-1];
  }
}

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
