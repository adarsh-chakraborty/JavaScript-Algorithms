// Problem Statement
/*
Given a natural number n, Determine if it's a prime number or not.
A Prime number is a number greater than 1 which is not a product of two smaller natural numbers.
*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  // n is always divisble by itself so less than n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Time Complexity: O(sqrt(n))
