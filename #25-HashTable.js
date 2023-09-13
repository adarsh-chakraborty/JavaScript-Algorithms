/*
A HashTable also known as HashMap is a data structure that is used to store key value pairs.
Given a key, you can associate a value for very fast look up.

A Hashing functiona accepts a string key, converts it to a hashcode using a defined logic and then maps it to
numeric index within the bounds of the array. We use such Hasing Function with a fixed size array.

Implementations:
- Set to store a key-value pair
- Get to retrive a given value based on the given key.
- Remove to delete a key-value pair.
- Hashing function to convert string key to numeric index.

Hashtable are usually implement where constant time lookup and insertion is required e.g Database Indexing, Caches.

*/

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += Number(key.charCodeAt(i));
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1]; // value
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i <= this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("adarsh", "chakraborty");
table.set("Adarsh", "Chakraborty");
table.set("name", "Bruce");
table.set("mane", "Cookie");
table.set("kane", "Orange");
table.set("lane", "Not Orange");

console.log("adarsh =>", table.get("adarsh"));
console.log("Adarsh =>", table.get("Adarsh"));
console.log("name =>", table.get("name"));
console.log("mane =>", table.get("mane"));
console.log("kane =>", table.get("kane"));
console.log("lane =>", table.get("lane"));
table.set("adarsh", "ADARSH");
console.log("adarsh =>", table.get("adarsh"));
table.display();

table.remove("kane");
table.remove("lane");
table.display();
