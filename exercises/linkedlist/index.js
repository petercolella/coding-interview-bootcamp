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
}

module.exports = { Node, LinkedList };
