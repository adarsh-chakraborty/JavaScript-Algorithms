/*
Problem Statement: Given an array of n elements and a target element 't'. Find the index of t in the array.
Return -1 if the target does not exists in the array.
*/

const arr = [-5, 2, 10, 4, 6];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 20)); // -1

// Time Complexity: O(n)
