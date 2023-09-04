/*
Problem Statement: Given an array of integers, sort the array.

Algorithm:
Pick a Pivot Element. It can be the first element, last element, random element or median element.
Put everything either left or right side of the pivot element depending on whether it's greater or smaller than the pivot element.
Repeat the process for Individual left and right arrays till you have an array of length 1 which is already sorted by definition.
Concat the left array, Pivot Element and the right array.
*/

const arr = [8,20,-2,4,-6];

function quickSort(arr) {
    // Exit case
    if(arr.length <2 ){
        return arr;
    }
    // Choosing pivot element: Last element
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

console.log(quickSort(arr));

// Complexity: 
// Worst Case Complexity when array is already sorted: O(n^2)
// Avg Case: O(n log n)
