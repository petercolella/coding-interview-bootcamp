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

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    // if (!previous.next) {
    //   return (this.head = null);
    // }

    // let node = previous.next;

    while (node.next) {
      previous = node;
      node = node.next;
      //   previous = previous.next;
    }

    // return (previous.next = null);
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }

    // let node = new Node(data);

    // if (!this.head) {
    //   this.head = node;
    // }

    // this.getLast().next = node;
  }

  getAt(index) {
    // if (!this.head) {
    //   return null;
    // }

    let counter = 0;
    let node = this.head;

    // if (!node) {
    //   return null;
    // }

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // let counter = 1;
    // let previous = this.head;
    // let previous = this.getAt(index - 1);
    // let node = this.getAt(index);

    // if (previous && node) {
    //   previous.next = node.next;
    // } else if (!previous && node) {
    //   this.head = node.next;
    // } else {
    //   return;
    // }

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    // if (index === 0) {
    //   this.head = previous.next;
    // }

    // let node = previous.next;

    // while (node) {
    //   if (counter === index) {
    //     previous.next = node.next;
    //   }

    //   counter++;
    //   node = node.next;
    // }

    // return;
  }

  //   insertAt(data, index) {
  //     if (index === 0) {
  //       if (!this.head) {
  //         this.head = new Node(data);
  //         return;
  //       } else if (this.head) {
  //         const node = new Node(data);
  //         node.next = this.head;
  //         this.head = node;
  //         return;
  //       }
  //     }

  //     if (this.size() <= index) {
  //       this.getLast().next = new Node(data);
  //       return;
  //     }

  //     const node = new Node(data);
  //     node.next = this.getAt(index);
  //     this.getAt(index - 1).next = node;
  //   }

  //   insertAt(data, index) {
  //     const node = new Node(data);

  //     if (!this.getAt(index)) {
  //       index === 0 ? (this.head = node) : (this.getLast().next = node);
  //     } else {
  //       node.next = this.getAt(index);
  //       index === 0 ? (this.head = node) : (this.getAt(index - 1).next = node);
  //     }
  //   }

  insertAt(data, index) {
    const node = new Node(data);
    node.next = this.getAt(index);

    if (index === 0) {
      this.head = node;
    } else if (!node.next) {
      this.getLast().next = node;
    } else {
      this.getAt(index - 1).next = node;
    }
  }
}

module.exports = { Node, LinkedList };
