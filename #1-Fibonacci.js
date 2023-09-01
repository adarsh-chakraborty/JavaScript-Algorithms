// Problem Statement
// Given the number 'n', find the first 'n' elements of the fibonacci sequence.

// Fibinacci Sequence is a sequence in which each number is the sum of the two previous ones.

function getFibonacciSequence(n) {
  let seq = [0, 1];

  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
}

console.log(getFibonacciSequence(100000000));

// Time Complexity: O(n)
