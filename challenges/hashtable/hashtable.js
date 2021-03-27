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

  insert(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    } 
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) {
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
}

class HashTable {
  constructor(size) {
    this.size = size;
    //more object oriented approach to creating an array in JS - same thing as doing  [].fill() - creates array of undefined
    this.buckets = new Array(size);

  }

  //take in a key return a position within this.buckets - need to get a position of a bucket
  hash(key) {
    // 
    let asciiSum = key.split('').reduce((acc, char) => { // this gives us all characters separately
      return acc + char.charCodeAt(0); //this is something to convert string characters into ascii values - at 0 because we split it
    }, 0);

    return (asciiSum * 599) % this.size;
  }

  add(key, value) {
    //insert value into bucket, linked list add to whatever it has stored there (once we've determined our key)
    let hash = this.hash(key); // index of our bucket

    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    let data = { [key]: value };
    this.buckets[hash].insert(data);
  }

  //does any bucket contain the key?
  contains(key) {
    //does the key exist in our buckets
    //first hash
    let hash = this.hash(key);
    
    //check if bucket has thing
    if (this.buckets[hash]){
      return true;
    } else {
      return false;
    }
    
    // return !!this.buckets[hash]; - double !! is type conversion, flips something around to convert to boolean
  }

  //takes in a key and returns the value
  //similar to contains - will have to get value out of that thing
  get(key) {
    let hash = this.hash(key);
    let bucket = this.buckets[hash];
    let current = bucket.head;

    while (current){
      if(current.value[key]) {
        return current.value[key];
      } else if (current.next === null) {
        return null;
      } else {
        current = current.next;
      }
    }
  }
}

let table = new HashTable(1024);
// table.hash('Jacob');
// table.add('Jacob', 'instructor');
// table.add('John', 'test');
// table.add('Xena', 'another value');
// table.add('johnjacobjingleheimer', 128949834);
// console.log(table.get('Jacob'));
// console.log(JSON.stringify(table));
// console.log(table.contains('bird'));
// let list = new LinkedList();
// list.insert(5);
// console.log(list);
// console.log(table.hash('Carly'));
table.add('Carly', 'testone');
table.add('Caryl', 'testtwo');
// console.log(table.buckets[589].head.next);
// console.log(table.get('Caryl'));

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
