/* 
Push to add element on top of stack
Pop to remove element from to stack
Peek: Get the element on top of stack
IsEmpty: Check if stack is empty
Size: Get number of items in stack
*/

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(19);
stack.push(18);
stack.push(3);
stack.print();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());
