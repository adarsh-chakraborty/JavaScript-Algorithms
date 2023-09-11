/*
FIFO - First In First Out 
enqueue(): Add an element to the queue
dequeue(): Remove the oldest element from the queue
Peek: Get the element on front of queue
IsEmpty: Check if queue is empty
Size: Get number of items in queue
print: Visualize the elements in queue
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

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const queue = new LinkedListQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("Is Empty?", queue.isEmpty());
console.log("Size", queue.getSize());
console.log("Peek", queue.peek());

queue.dequeue();
queue.print();
console.log("Peek", queue.peek());
