/* 
enqueue(): Add an element to the queue
dequeue(): Remove the oldest element from the queue
IsFull: Check if the queue is full.
IsEmpty: Check if queue is empty
Peek: Get the element on front of queue
Size: Get number of items in queue
print: Visualize the elements in queue
*/

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;

      if (this.front === -1) {
        this.front = this.rear;
        // this.rear is 0 at this point so does front now
        // next time when new element is added, front pointer will not change but rear will.
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    // get the first item
    const item = this.items[this.front];

    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
      console.log("[Debug Original Array]", this.items);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(50);

console.log(queue.isFull());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
