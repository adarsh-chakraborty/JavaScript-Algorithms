/* Problem Statement
Given two finite non empty sets, find their cartesian product.

In mathematics, specifically set theory, the Cartesian product of two sets A and B,
denoted A × B, is the set of all ordered pairs (a, b) where a is in A and b is in B.
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 7, 10];

function cartesianProduct(set1, set2) {
  const result = [];
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      result.push([set1[i], set2[j]]);
    }
  }
  return result;
}

console.log(cartesianProduct(arr1, arr2));

// Compexity: O(mn) [Because 2 arrays with different length, M * N]
