/*
Arrays, Stacks and Queues and linkedlist have only 1 way to read data
but a hierarchical data structure can be traversed in more than one ways

There are mainly two ways of traversing trees

1. DFS
2. BFS

DFS: Depth First Search algorithm starts at root node and explores as far as possible before backtracking. (Exploring left first)

Three types:
Pre order
In Order
Post Order


Pre-Order Traversal Algorithm: 
Read the data of the root node
Visit the left sub tree
Visit the right sub tree

In-Order Traversal Algorithm: 
Visit the left subtree
Read the data
Visit the right sub tree

Post-Order Traversal Algorithm: 
Visit the left subtree
Visit the right sub tree
Read the data
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

  preorder(root) {
    if (!root) return;
    console.log(root.value);
    this.preorder(root.left);
    this.preorder(root.right);
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();
console.log("TREE IS EMPTY?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
bst.postorder(bst.root);
