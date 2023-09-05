/*
Problem Statement: 
Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. 
Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack 
i.e. a disk can only be moved if it is the uppermost disk on a stack.
No disk may be placed on top of a smaller disk.

Algorithm:
Shift n-1 disks from A to B using C when required.
Shift lask disk from A to C
Shift n-1 disks from B to C using A when required.
*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move Disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  //   Shift n-1 disks from A to B using C
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move Disk ${n} from ${fromRod} to ${toRod}.`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// Shift A -> C using B
towerOfHanoi(3, "A", "C", "B");

// Time Complexity: O(2^N-1) or just approximate Big O(2^N)
// Because it executes once for n=1, thrice for n=2, and six times when n=3 so 2 to the power N.
