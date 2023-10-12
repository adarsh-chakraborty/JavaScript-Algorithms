/*
BFS: Breadth First Search algorithm explores all the present depth prior to on moving to next depth level.

Create a queue
Enqueue the root node
As long as a node exists in a queue:
     Dequeue the node from the front
     Read the node's value
     Enqueue the node's left child if it's exists
     Enqueue the node's right child if it's exists

So all the nodes in the same level are visited first before moving to a deeper level.


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

  levelOrder() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  min(root) {
    // two scenarios
    // 1 If no left child node, return root
    // 2 If left child node exists, recursively traverse to the left side.

    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    // two scenarios
    // 1 If no right child node, return root
    // 2 If right child node exists, recursively traverse to the left side.

    if (!root.right) {
      return root.value;
    } else {
      return this.min(root.right);
    }
  }

  delete(value) {
    /* If the node to delete is a leaf, simply remove it.
    If the node has one child, replace it with that child.
    If the node has two children, replace it with its in-order predecessor or successor
    and then recursively delete that predecessor or successor. */

    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // 3 scenarios
      // 1: LEAF NODE : NO CHILDREN
      if (!root.left && !root.right) {
        // leaf node
        return null;
      }
      // 2: NODE HAS ONLY ONE CHILD NODE
      if (!root.left) {
        // if no left child, return right child
        return root.right;
      } else if (!root.right) {
        // if no right child, return left child
        return root.left;
      }
      // 3: NODE HAS TWO CHILD NODES
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("TREE IS EMPTY?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.levelOrder();
bst.delete(10);
console.log("DELETION");
bst.levelOrder();
