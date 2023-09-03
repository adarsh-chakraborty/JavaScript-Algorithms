/*
Problem Statement: Given an array of integers, sort the array.

Algorithm:
Assume the first element is already sorted. Remaining 4 elements are unsorted.
Start at Index: 1 which is the first unsorted element. NTI = First Element
Compare NTI with the left SE.
Check if the NTI is greater than SE.

*/

const arr = [7, 2, 3, 8, 5, 6, 10, 1];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort(arr));

// Complexity: O(n^2)
