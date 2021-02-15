# Reverse an Array
<!-- Short summary or background information -->
Reverse an array without using array methods.

## Challenge
<!-- Description of the challenge -->
Take in an array as an argument, return an array with the elements in reverse order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Took the approach of making a for loop that went through the input array starting at the last value, and pushing that value into the results array at index 0. Then, pulling the second to last value and pushing that value into index 1 of the results array. Doing a for loop was what came to mind first, and it felt like a straight forward way to approach it.
Big O: O(N) - will grow linearly.

## Solution
<!-- Embedded whiteboard image -->
