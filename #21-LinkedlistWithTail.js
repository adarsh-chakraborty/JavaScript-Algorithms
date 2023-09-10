/*
Problem Statement: In the previous linkedlist, prepend was in Constant Time Complexity O(1)
while adding new element at the end was linear O(n) complexity.

To make append work in constant time complexity we can make use of a tail pointer to keep track of the last node in the linkedlist.
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // always maintain the first node of the linkedlist: Head
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let curr = this.head; // first node in list;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);
    // two scenarios
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      // not empty
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(n)
  append(value) {
    // inserting an element at the end of the list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // update the last pointer to current new node;
      this.tail.next = node;
      // point tail to the latest node
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    // two scenarios
    if (this.isEmpty()) {
      return null;
    } else {
      // grab the item to be deleted to return it later
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  removeFromEnd() {
    // if the list is empty
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.tail.value;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
        // list is now empty
      } else {
        let prev = this.head;
        while (prev.next !== this.tail) {
          prev = prev.next;
        }
        // Now we have a node previous to the node that is being deleted.
        prev.next = null;
        this.tail = prev;
      }
      this.size--;
      return value;
    }
    // option a previous node
  }
}

const list = new LinkedList();
console.log("Linkedlist Empty?", list.isEmpty());
console.log("Size of linkedlist:", list.getSize());
list.print();

list.append(1);
list.append(2);
list.append(3);
list.print();
list.prepend(0);
list.print();
console.log("Linkedlist Empty?", list.isEmpty());
console.log("Size of linkedlist:", list.getSize());
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();

// Time Complexity of Prepend & append
// prepend, append, removeFromFront: Constant Big O(1)
// removeFromEnd: Linear Big O(n)
