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

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Insert: space O(1)/time O(1)
- Includes: space O(n)/time O(n)
- toString: space O(n)/time O(n)

## Resources and Collaborators

- Code Fellows docs on [linked lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)
- Worked at lab table with Jason D, Jason Q, Nick M
