# Tree Intersection

Find common values in 2 binary trees.

## Challenge

<!-- Description of the challenge -->
- Write a function called tree_intersection that takes two binary tree parameters
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Take each tree and do a preOrder traversal, adding values of each node to an array.
- Iterate through the arrays comparing values
- Push values that are the same into another results array
- Return the results array

## Resources and Collaborators

- Worked at lab table with Jason D, Jason Q, and Nick M
- Code Fellows docs on [trees](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)

## Whiteboard

![image](/assets/tree-intersection1.png)
![image](/assets/tree-intersection2.png)
