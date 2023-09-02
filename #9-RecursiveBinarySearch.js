/*
Given a sorted array of n elements and a target element t, find the index of t in the array.
Return -1 if the target is not found.


PseudoCode 
- If the array is empty, return -1 as the element is not found.
- If the array has elements, find the middle element of the array. If the target is equal to the middle element return the middle index.
- If the target is less than the middle element, BinarySearch the left half of the array.
- If the target is greater than the middle element, BinarySearch the right half of the array.
*/

const arr = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  return search(arr, target, leftIndex, rightIndex);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let mid = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[mid]) return mid;

  if (target < arr[mid]) {
    // left half
    return search(arr, target, leftIndex, mid - 1);
  } else {
    // right half
    return search(arr, target, mid + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch(arr, 10)); // 4
console.log(recursiveBinarySearch(arr, 6)); // 3
console.log(recursiveBinarySearch(arr, 20)); // -1
console.log(recursiveBinarySearch(arr, -5)); // 0

// Big O Complexity: O(log n)
