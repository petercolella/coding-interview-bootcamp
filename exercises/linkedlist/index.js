// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //   size() {
  //     const list = this;
  //     let count = 0;
  //     for (let node in list) {
  //       console.log(node);
  //       console.log(list);
  //       console.log(list[node]);
  //       console.log(count);
  //       if (list[node]) {
  //         count++;
  //         list[node].size();
  //       } else {
  //         return count;
  //       }
  //     }
  //   }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = { Node, LinkedList };
