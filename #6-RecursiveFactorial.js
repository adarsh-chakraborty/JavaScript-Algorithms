// Problem Statement
// Given a number n, find the factorial of the integer

// Factorial is a non-negative integer denoted by n! is a product of all positive integers less than or equal to n.
// Factorial of 0 is always 1, Factorial of 4 is 4 x 3 x 2 x 1.

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Time Complexity: O(n)
