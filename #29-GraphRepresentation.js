/*
A Graph is a non-linear data strucuture which consists of finite number of vertices (also called nodes) and are connected by edges.
Trees are a specific type of a Graph Data Structure but Trees are only read top down.
There is no hierarchy in Graphs or set ways to read a graph.

Types of Graph:
Directed: A Graph in which edges has a direction.
Un-Directed: A Graph in which edges does not have a direction and so traversing is bi-directional.

Graph Represenation in Code:
Adjacency Matrix
Adjacency List

Adjacency Matrix:
Adjacency Matrix is a 2D Array of size of VXV where V is the number of Vertices in the graph.
Each Row and Column represent a Vertex

If the value of any element say matrix[i][j] is 1, It represent there is a edge connected vertex i and vertex j

Adjacency List:
In this form of representation, Vertices are stored in a map like data strucutre and every vertex stores a list of it's adjacent vertices.


Pros and Cons:
With Adjacency List we only need to store what vertices it is connected to
But with Adjacency Matrix we need to store which is connected and which is not. Irrespective of edge is exists or not.

List: Constant Time Complexity
Matrix: Linear Time Complexity

With List we can store additional information like weight
*/

const matrix = [
  /// 3 vertices so 3 arrays.
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]);

/////////////////////////////////
AdjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

// to see nodes  is connected to
console.log(AdjacencyList["A"]);
console.log(AdjacencyList["B"]);
console.log(AdjacencyList["C"]);
