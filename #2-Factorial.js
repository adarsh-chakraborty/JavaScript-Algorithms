// Problem Statement
// Given a number n, find the factorial of the integer

// Factorial is a non-negative integer denoted by n! is a product of all positive integers less than or equal to n.
// Factorial of 0 is always 1, Factorial of 4 is 4 x 3 x 2 x 1.

function getFactorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(getFactorial(0)); // 1
console.log(getFactorial(1)); // 1
console.log(getFactorial(5)); // 120
