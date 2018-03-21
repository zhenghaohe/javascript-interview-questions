class Node {
 constructor(data, next = null) {
   this.data=data;//assign it to the data property
   this.next=next;
 }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      console.log(node.data);
      counter++;
      node = node.next;
    }
    return 'counter = '+counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!node) return null;
    while(node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    let node = this.head;
    if (node) {
      this.head = node.next;
    }
  }
  removeLast() {
    let node = this.head;
    if (node) { // empty list
      let prevNode;
      while(node.next){
        prevNode = node;
        node = node.next;
      }
      prevNode ? prevNode.next = null : this.head = null;
    }
  }

  insertLast(data) {
    let node = this.head;
    if (node) {
      while(node.next){
        node = node.next;
      }
      node.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node && counter!==index){
      counter++;
      node = node.next;
    }
    return (node ? node: null);
  }

  removeIndex(index) {
    let node = this.head;
    let counter = 0;
    let prevNode;
    if (index === 0 && node) {  // edge case 1: index = 0
      this.head = node.next;
      return;
    }
    while(node && counter !== index) {
      prevNode = node;
      node = node.next;
      counter++;
    }
    if (prevNode && prevNode.next) {
      prevNode.next = node.next;
      return;
    }
    return; // edge case 2&3: empty list or index>size
  }

  removeVal(val) {
    let node = this.head;
    let prevNode;
    if (node && node.data === val) { //edge case 1: index = 0
      this.head = node.next;
      return;
    }
    while(node && node.data !== val) {
      prevNode = node;
      node = node.next;
    }
    if (prevNode && prevNode.next) {
      prevNode.next = node.next;
      return;
    }
    return; //edge case 2&3: empty list or val is not in the list
  }

  insertAt(data,index) {
    let node = this.head;
    let counter = 0;
    let prevNode;
    if (index === 0 || !node) { //edge case 1&2: empty list or insert at index 0
      this.head = new Node(data,node);
      return;
    }
    while(node && counter !== index) {
      prevNode = node;
      node = node.next;
      counter++;
    }
    prevNode.next = new Node(data,node);
  }

}


const list = new LinkedList();
list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(1);
list.insertLast(4);
console.log(list.size());
