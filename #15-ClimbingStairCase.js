/* Problem Statement 
Given a staircase of n steps, count number of distinct steps that can be climbed up to the step.

Contrainsts:
1 or 2 step at a time.
*/

function climbingStairCase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(climbingStairCase(5));

// Complexity: Linear O(n)
