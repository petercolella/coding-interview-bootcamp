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

  //   contains(data) {
  //     // console.log(this);
  //     if (data < this.data && this.left) {
  //       if (data === this.left.data) {
  //         return this.left;
  //       } else {
  //         this.left.contains(data);
  //       }
  //     } else if (data > this.data && this.right) {
  //       console.log(this);
  //       console.log(this.right.data);
  //       console.log(data);
  //       console.log(this.right);
  //       if (data === this.right.data) {
  //         return this.right;
  //         console.log('oops');
  //       } else {
  //         this.right.contains(data);
  //       }
  //     } else {
  //       return null;
  //     }
  //   }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

console.log('node: ', node);
console.log('Insert function: ', node.insert());
console.log('Contains function: ', node.contains());
console.log(node.contains(3));

module.exports = Node;
