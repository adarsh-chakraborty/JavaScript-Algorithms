# Big O Cheat Sheet

| Description                             | Big O Notation |
| --------------------------------------- | -------------- |
| Calculation not dependent on Input Size | O(1)           |
| 1 Loop                                  | O(n)           |
| 2 nested loops                          | O(n^2)         |
| Input size reduced by half              | O(log n)       |

## Built-In Data Structures

### Array

- arr.push("New value at end of array"); // Insert an element at the end of array. (append)
- arr.unshift("New Element at beginning of array");
- arr.pop(); // Removes the last element
- arr.shift(); // Removes the first element of array and returns it.

### Map, Filter, Reduce, contact, slice, splice

- Time Complexity:
- Insert/Remove from End of array. Time Complexity is Constant O(1)
- Insert/Remove at beginning of array. O(n) because index will reset for each element of the array.
- Access O(1)
- Searching O(n)
- push pop O(1)
- shift, unshift, concat, splice, slice: Big O(n)
- foreach, map, filter, reduce: Big O(n)

## Objects

Time Complexity:

- Accessing/Deleting: Constant Big(1)
- Searching/Iterating through Object.keys, Entries and Values: Linear **Big O(n)**
