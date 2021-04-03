'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex){
    //this could be added as LinkedList, using an array to keep it simple
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)){
      throw new Error('Invalid start vertex');
    }
    //create a new edge and add that to adjacency list for the vertex
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // adds an edge to the vertex's list of connections
  }

  //helper function to help with traversals
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)){
      throw new Error('no neighbors for that vertex');
    }
    return [...this.adjacencyList.get(vertex)]; // don't want to mutate data, spreading into new array
  }

  breadthFirst(vertex){
    const queue = []; //order of visited nodes will be FIFO
    const visited = new Set(); // track visited vertices, Set()this works a lot like a map - throws errors for trying to add duplicates, could use a lot of things here (can do an array, and use array.includes)
    //this is also helpful if you think your linked list has a cycle

    queue.unshift(vertex);
    visited.add(vertex);

    while(queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors

      for (let neighbor of neighbors) { // each neighbor is an edge
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)){ //if we have already visited skip
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited;
  }

  depthFirst(vertex){
    // const stack = [];
    const visitedVertices = new Set();

    // stack.push(vertex);
    visitedVertices.add(vertex); // this could be a good opportunity for recursion as well

    const traverse = (current, visited) => {
      
      visited.add(current);
      
      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if(!visited.has(neighbor.vertex)){
          traverse(neighbor.vertex, visited);
        }
      }
    };

    traverse(vertex, visitedVertices);
    return visitedVertices;

    // while(stack.length) {
    //   let currentVertex = stack.pop();
    //   let neighbors = this.getNeighbors(currentVertex);

    //   for (let neighbor of neighbors) {
    //     let neighborVertex = neighbor.vertex;

    //     if (visited.has(neighborVertex)){ //if we have already visited skip
    //       continue;
    //     } else { // if not add to visited list, and queue it up
    //       visited.add(neighborVertex);
    //       stack.push(neighborVertex);
    //     }

    //   }
    // }

  }

  size(vertex){
    const queue = [];
    const visited = new Set();

    queue.unshift(vertex);
    visited.add(vertex);

    while(queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors

      for (let neighbor of neighbors) { // each neighbor is an edge
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)){ //if we have already visited skip
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited.size;
  }
}

const test = new Graph();

const one = new Vertex('one');
const two = new Vertex('two');
const three = new Vertex('three');
const four = new Vertex('four');
const five = new Vertex('five');
const six = new Vertex('six');

//just creating list - don't have any adjacencies yet
test.addVertex(one);
test.addVertex(two);
test.addVertex(three);
test.addVertex(four);
test.addVertex(five);
test.addVertex(six);

test.addEdge(one, three);
test.addEdge(two, four);
test.addEdge(one, four);
test.addEdge(four, two);
test.addEdge(four, five);
test.addEdge(two, six);

// console.log(test.breadthFirst(one));
// console.log(test.depthFirst(one));
// console.log(test.size(one));

module.exports = {
  Vertex,
  Edge,
  Graph,
};
