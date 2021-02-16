# Reverse an Array
<!-- Short summary or background information -->
Insert and shift an array in middle index.

## Challenge
<!-- Description of the challenge -->
Take in an array and value to be added, return an array with the new value added at the middle index.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Took the approach of first figuring out the middle index by using the array.length/2. Since there will be both odd and even lengths, we used Math.ceil() to round up to the nearest integer in the case that the length is odd. Then, we inserted the input value at the middle index of the array.
Big O space and time: O(1)

## Solution
<!-- Embedded whiteboard image -->
![image](/assets/array-shift.png)
