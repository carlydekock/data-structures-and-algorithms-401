# Trees

Binary tree and binary search tree methods and implementation.

## Challenge

<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
  - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
  - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
- Extend BinaryTree class, write an instance method called find-maximum-value which returns the maximum value stored in the tree.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- PreOrder traversal: O(n) space/ O(n) time
- InOrder traversal: O(n) space/ O(n) time
- PostOrder traversal: O(n) space/ O(n) time
- Adding new node: O(1) space/ O(h) time
- Searching for a value (contains): O(1) space/ O(h) time
- Find max value: O(1) space, O(n) time

## Resources and Collaborators

- Worked at lab table with Jason D, Jason Q, Nick M, and Seid
- Code Fellows docs on [trees](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)
- [Medium article](https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b)
- Geeks for Geeks finding maximum value [article](https://www.geeksforgeeks.org/find-maximum-or-minimum-in-binary-tree/)

## Whiteboard

![image1](/assets/trees.png)
![image2](/assets/trees2.png)
![image3](/assets/trees3.png)
