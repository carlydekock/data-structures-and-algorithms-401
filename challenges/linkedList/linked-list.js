'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // traverse() {
  //   let current = this.head;

  //   if(!current) {
  //     throw new Error('No head!');
  //   }

  //   while (current) {
  //     // console.log(current.value);
  //     current = current.next;
  //   }
  // }

  // append(value) {
  //   let current = this.head;

  //   while (current) {
      
  //     if (current.next === null) {
  //       current.next = new Node(value);
  //       // console.log(current.value);
  //       return;
  //     }
  //     current = current.next;
  //   }
  // }

  insert(value) {
    if(this.head === null) {
      let current = new Node(value);
      this.head = current;
    } else {
      let current = this.head;
      let newNode = new Node(value);
      newNode.next = current;
      this.head = newNode;
      current = this.head;
      return current;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if(value === current.value) {
        // console.log(true);
        // current = current.next;
        return true;
      } else if (current.next === null) {
        // console.log(false);
        return false;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while(current) {
      let stringTwo = current.value;
      current = current.next;
      string += `{${stringTwo}} -> `;
    }
    string += '{null}';
    // console.log(string);
    return string;
  }
}


// const ll = new LinkedList();

// ll.head = new Node(0);
// ll.head.next = new Node(1);
// ll.head.next.next = new Node(2);
// ll.head.next.next.next = new Node(3);

// ll.append(4);
// ll.traverse();
// ll.includes(3);
// ll.insert(6);
// ll.insert(8);

module.exports = {
  list: LinkedList,
  node: Node,
};
