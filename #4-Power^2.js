/* 
Problem Statement: Given a integer n, determine if the integer is a power of 2 or not.

An Integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
*/

function isPowerOfTwo(n) {
  // if negative false
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Big O Complexity: O(logn)

// -------------------------------------------------------------------------

function isPowerOfTwoBitwise(n) {
  // if negative false
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false

// Big O Compexity: O(1) Best.

/* 
Explaination: In Binary, A number that is a power of two which is except for 1 ends with a zero.
1 - 1
2 - 10
3 - 100
4 - 1000

If we perform bitwise AND operation, we will always endup with zero

(Bitwise AND is 1 if both numbers are 1)
0001 0010 0100 1000
0000 0001 0010 0100
------------------- (Bitwise AND Operation)
0000 0000 0000 0000

*/
