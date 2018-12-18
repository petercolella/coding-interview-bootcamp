// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  //   insert(data) {
  //     let node = this;
  //     if (node.data > data) {
  //       if (node.left === null) {
  //         node.left = new Node(data);
  //       } else {
  //         node = node.right;
  //         node.insert(data);
  //       }
  //     } else {
  //       if (node.right === null) {
  //         node.right = new Node(data);
  //       } else {
  //         node = node.right;
  //         node.insert(data);
  //       }
  //     }
  //   }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

module.exports = Node;
