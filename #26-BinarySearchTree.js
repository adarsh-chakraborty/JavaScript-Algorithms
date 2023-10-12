/*
Binary Tree is a tree data structure which has two children.
Binary Search Tree: A BST is a binary tree which has two properties which has two smaller properties.
Each left node is smaller than the parent node and each right node is the greater than their parent node.


Binary Search Tree supports following operations:
INSERT
SEARCH
DFS
BFS
Deletion

Applications: Searching, Sorting, Priority Queue and lookup tables.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // always maintain a root node in the tree, if empty null.
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    // two scenarios, is empty or not empty
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      // Check left child Node
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      // Check right child Node
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value == value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("TREE IS EMPTY?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 115));
