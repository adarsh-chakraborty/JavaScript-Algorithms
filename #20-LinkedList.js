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

  // Insert
  insert(value, index) {
    // Check if Index is less than 0 or greater than size of the list

    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      // Now we have the prev Node
      // Connect the new node tail to next node
      node.next = prev.next;
      // Connect the prev node tail to new node.
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      const removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        // stop just the previous of the node to be removed
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  // search the value in the linkedlist, return the index if found else -1
  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return -1;
    } else {
      let i = 0;
      let curr = this.head;

      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
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
list.insert(60, 4);
list.insert(70, 1);

// list.print();
// list.removeFrom(3);
// list.removeFrom(0);
// list.removeFrom(4);

// list.print();
// list.removeValue(20);
// list.removeValue(70);
// list.removeValue(30);
// list.removeValue(30);
// list.removeValue(50);
list.print();
console.log(list.search(20));
console.log(list.search(50));
console.log(list.search(30));
console.log(list.search(31));

// Time Complexity of Prepend & append
// prepend: Constant Big O(1)
// append: Linear Big O(n)
