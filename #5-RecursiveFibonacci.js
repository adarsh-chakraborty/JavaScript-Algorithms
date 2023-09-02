// Problem Statement
// Given the number 'n', find the first 'n' elements of the fibonacci sequence.

// Fibinacci Sequence is a sequence in which each number is the sum of the two previous ones.

function recursiveFibonacci(n) {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Time Complexity: O(2^n) BAD
