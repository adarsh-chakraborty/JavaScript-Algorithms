/*
Problem Statement: Given an array of integers, sort the array.

Algorithm:
Divide the array into sub array each containing only one element. (Array with one element considered sorted)
Repeatedly merge the sub arrays to produce new sorted sub arrays untill there is only one sub array remaining.
That will be the sorted array.
*/

const arr = [8, 20, -2, 4, -6, 0];

function mergeSort(arr) {
  // Base case for recursion
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr));

// Complexity:
// Avg Case: O(n log n)
