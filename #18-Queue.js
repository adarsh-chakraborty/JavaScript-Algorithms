/*
FIFO - First In First Out 
enqueue(): Add an element to the queue
dequeue(): Remove the oldest element from the queue
Peek: Get the element on front of queue
IsEmpty: Check if queue is empty
Size: Get number of items in queue
print: Visualize the elements in queue
*/

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front]; // get the first item
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(19);
queue.enqueue(18);
queue.enqueue(32);
queue.print();
console.log(queue.peek());
console.log("Removing", queue.dequeue());
console.log(queue.peek());
queue.print();
console.log("Size of queue:", queue.size());
console.log("Removing", queue.dequeue());
console.log(queue.isEmpty());

// Accessing/Removing Time Complexity: Constant Big O(1)
