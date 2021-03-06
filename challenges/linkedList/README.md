# Singly Linked List
<!-- Short summary or background information -->
Creating methods for singly linked lists.

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored int he Node, and a pointer to the next Node.
- Within your LinkedList class, include head property.
- Upon instantiation, an empty linked list should be created.
- Define a method called insert, which takes any value as an argument and adds a new node with that value to the head of the list.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a node’s value somewhere within the list.
- Define a method called toString which takes in no arguments and returns a string representing all the values in the linked list formatted as: "{ a } -> { b } -> { c } -> NULL"
- Define a new method append which takes in a value which adds a new node with the given value to the end of the list
- Define a new method insertBefore which takes in a value and a newVal and adds a new node with the given newValue immediately before the first value node
- Define a new method insertAfter which takes in a value and a newVal and adds a new node with the given newValue immediately after the first value node
- Define a new method nthFromK which takes a number, k, as a parameter and returns the node’s value that is k from the end of the linked list

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Insert: space O(1)/time O(1)
- Includes: space O(n)/time O(n)
- toString: space O(n)/time O(n)
- Append: space O(n)/time O(n)
- insertBefore: space 0(1)/time O(1)
- insertAfter: space 0(1)/time O(1)
- kthFromEnd: space O(1)/time O(1)

## Resources and Collaborators

- Code Fellows docs on [linked lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)
- Worked at lab table with Jason D, Jason Q, Nick M
- [StackOverflow article](https://stackoverflow.com/questions/2598348/how-to-find-nth-element-from-the-end-of-a-singly-linked-list)
