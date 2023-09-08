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
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    // head should always point to the first element as prepend is executed.
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // adding to Existing list
      node.next = this.head;
      this.head = node;
    }
    this.size++;
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

  append(value) {
    // add element at end of the list

    // create new node with next pointer pointing at null
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // existing list

      // traverse to the last node in the list
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
}

const list = new LinkedList();
list.print();
console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.print();
list.append(40);
list.print();
list.append(50);
list.print();

// Time Complexity of Prepend & append
// prepend: Constant Big O(1)
// append: Linear Big O(n)
