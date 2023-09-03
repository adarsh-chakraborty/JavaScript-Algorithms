/*
Problem Statement: Given an array of integers, sort the array.
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));
console.log('Now running Unoptimized Bubble sort algorithm.');
function bubbleSortNotOptimized(arr) {
  let swapped = false;
  do {
    swapped = false;
    // arr.length -1 because we comparing with i+1
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSortNotOptimized([8, 20, -2, 4, -6]));
// Complexity: O(n^2)
