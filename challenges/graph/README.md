# Graph Implementation
<!-- Short summary or background information -->
Implement Graphs and related methods.

## Challenge
<!-- Description of the challenge -->
- Implement your own graph, should be represented as an adjacency list
- addNode(): adds a new vertex to the graph, takes in the value of that vertex and returns the added vertex
- addEdge(): adds a new edge between two nodes in the graph, include ability to have a "weight", takes in the two nodes to be connected by the edge
- getNodes(): returns all of the nodes in the graph as a collection (set, list, or similar)
- getNeighbors(): returns collection of edges connected to the given node, takes in a given node, includes the weight of the connection in the returned collection
- size(): returns the total number of nodes in the graph

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Created Vertex, Edge, and Graph classes and constructors
- Created methods for addVertex(vertex), addEdge(startVertex, endVertex, weight), getNeighbors(vertex)
- Also created methods for both breadth first traversal as well as depth first traversal
- Created size method that traverses the graph and returns the number of vertices

## Resources and Collaborators

- Worked at lab table with Jason D, Jason Q, Nick M, and Bill
- Testing for empty objects [article](https://flaviocopes.com/how-to-check-object-empty/)
- Jest testing [docs](https://jest-bot.github.io/jest/docs/using-matchers.html)
