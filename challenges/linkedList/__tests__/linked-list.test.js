'use strict';

const linkedList = require('../linked-list.js');

describe('testing functionality of linked list and node instantiations', () => {
  it ('should instantiate an empty linked list', () => {
    const list = new linkedList.list();

    expect(list).toEqual({ head: null });
  });

  it('should properly insert head into linked list', () => {
    const insertNode = new linkedList.list();
    insertNode.insert('test');

    expect(insertNode.head.value).toEqual('test');
  });

  it('should properly insert multiple nodes into linked list', () => {
    const insertNode = new linkedList.list();
    insertNode.insert('test');
    insertNode.insert('test2');
    insertNode.insert('test3');

    expect(insertNode.head.value).toEqual('test3');
    expect(insertNode.head.next.value).toEqual('test2');
    expect(insertNode.head.next.next.value).toEqual('test');
  });

  it('should return true when finding a value within the linked list that exists', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const booleanValue = list.includes(2);

    expect(booleanValue).toEqual(true);
  });

  it('should return false when searching for a value in linked list that does not exist', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const booleanValue = list.includes(5);

    expect(booleanValue).toEqual(false);
  });

  it('head property will properly point to the first node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node('test');
    console.log('this is head', list.head);

    expect(list.head).toBeTruthy();
  });

  it('should return a string of all values that exist in the linked list', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    
    const testString = list.toString();
    expect(testString).toEqual('{0} -> {1} -> {2} -> {3} -> {null}');
  });
});
