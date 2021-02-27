# Stacks and Queues
<!-- Short summary or background information -->
Creating methods for stacks and queues.

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to top when the stack is created.
  - Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  - Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value. Should raise exception when called on empty stack.
  - Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack. Should raise exception when called on empty stack.
  - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value assigned to front when the queue is created.
  - Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  - Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value. Should raise exception when called on empty queue.
  - Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue. Should raise exception when called on empty queue.
  - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### Stacks
- Push: space O(1)/time O(1)
- Pop: space O(1)/time O(1)
- Peek: space O(n)/time O(n)
- isEmpty: space O(1)/time O(1)

### Queues
- Enqueue: space 0(1)/time O(1)
- Dequeue: space 0(1)/time O(1)
- Peek: space O(1)/time O(1)
- IsEmpty: space O(1)/time O(1)

## Resources and Collaborators

- Code Fellows docs on [stacks and queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html)
- Worked at lab table with Jason Q, Jason D, Nick M, Seid, and Bill
- MDN docs [throw error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [stackoverflow - testing for error/exception in jest](https://stackoverflow.com/questions/49027595/jest-test-that-exception-will-be-thrown-isnt-working/49027905)
