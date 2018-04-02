//A generic Binary Search Tree class.
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (!node) {
      this.root = new Node(data);
      return;
    } else {
      (function searchTree(node) {
        if (data<node.data&&node.left) searchTree(node.left);
        else if (data<node.data) node.left = new Node(data);
        else if (data>node.data&&node.right) searchTree(node.right);
        else if (data>node.data) node.right = new Node(data);
        })(node);
    }}

  findMin() {
    let node = this.root;
    while(node) {
      if (!node.left) return node.data;
      node = node.left;
    }
    return null;
  }

  findMax() {
    let node = this.root;
    while (node) {
      if (!node.right) return node.data;
      node = node.right;
    }
    return null;
  }

  find(data) {
    let node = this.root;
    while (node) {
      if (node.data === data) return node;
      if (node.data<data) node = node.right;
      else node = node.left;
    }
    return null;
  }

  isPresent(data) {
    let node = this.root;
    while (node) {
      if (data === node.data) return true;
      if (data < node.data) node = node.left;
      else node = node.right;
    }
    return false;
  }

  remove(data) {
    (function removeNode(node, data) {
      if (!node) return null;
      if (data === node.data) {
        // node has no children
        if (!node.left && !node.right) {
          return null;
        }
        // node has no left child
        else if (!node.left) {
          return node.right;
        }
        // node has no right child
        else if (!node.right) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    })(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root) {
    if (!node) return -1;
    return Math.min(this.findMinHeight(node.left),this.findMinHeight(node.right))+1;
  }

  findMaxHeight(node = this.root) {
      if (!node) return -1;
      return Math.max(this.findMaxHeight(node.left),this.findMaxHeight(node.right))+1;
  }

  inOrder() {
    if (!this.root) return null;
    const result = [];
    (function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    })(this.root)
    return result;
  }

  preOrder() {
    if (!this.root) return null;
    const result = [];
    (function traversePreOrder(node) {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    })(this.root)
    return result;
  }

  postOrder() {
    if (!this.root) return null;
    const result = [];
    (function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    })(this.root);
    return result;
  }

  traverseBF() {
    const result = [];
    if (this.root) {
      const queue = [this.root];
      while(queue.length) {
        const node = queue.shift();
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
        result.push(node.data);
      }
      return result;
    }
    return null;
  }

  traverseDF() {
    const result = [];
    if (this.root) {
      const stack = [this.root];
      while(stack.length) {
        const node = stack.shift();
        node.right && stack.unshift(node.right);
        node.left && stack.unshift(node.left);
        result.push(node.data);
      }
      return result;
    }
    return null;
  }
}



const bst = new BST();

bst.add(15);
bst.add(25);
bst.add(10);
bst.add(7);
bst.add(22);
bst.add(17);
bst.add(13);
bst.add(5);
bst.add(9);
bst.add(27);
bst.add(99);

// bst.remove(5);
bst.remove(7);
bst.remove(15);
console.log(bst.findMax());
console.log(bst.findMin());
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
console.log(bst.find(5));
console.log(bst.find(1));
console.log(bst.isPresent(5));
console.log(bst.isPresent(1));


// // bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());
// console.log('traverseBF: ' + bst.traverseBF());
// console.log('traverseDF: ' + bst.traverseDF());
