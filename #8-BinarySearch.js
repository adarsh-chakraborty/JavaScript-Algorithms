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

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 10)); // 4
console.log(binarySearch(arr, 6)); // 3
console.log(binarySearch(arr, 20)); // -1
console.log(binarySearch(arr, -5)); // 0

// Big O Complexity: O(log n)
