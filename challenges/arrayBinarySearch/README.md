# Array Binary Search
<!-- Short summary or background information -->
Binary search in a sorted 1D array

## Challenge
<!-- Description of the challenge -->
Take in 2 parameters (sorted array, search key), return the index of the array's element that is equal to the search key or -1 if the element does not exist.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
First, we talked about what type of loop we'd need to set up and talked through the steps of binary search. We arrived at it needing to be a while loop.
Then, we worked through the steps of what we needed to do in the while loop - if value at middle index === key, else if value at middle index < key , else.
Big O: O(log n)

## Solution
<!-- Embedded whiteboard image -->
![image](/assets/array-binary-search.png)

## Resources and Collaborators

- Worked at lab table with Jason Q, Jason D, and Nick M
- [Medium article](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)
- [Geeks for Geeks](https://www.geeksforgeeks.org/binary-search-in-javascript/)
- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Stack Abuse](https://stackabuse.com/binary-search-in-javascript/)