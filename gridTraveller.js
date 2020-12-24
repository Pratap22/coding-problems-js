// Say that you are a traveller on a 2D grid.
//You begin in the top - left corner and your goal is to travel to the bottom - right corner.
//You may only move left or right.

//In how many ways can you travel to the goal on a grid with dimensions m * n?

//Write a function `gridTraveller(m,n)` that calculates this.

const gridTraveller = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(18, 18));

//Memoization Recipe
//1. Make it work
// a) Visualize a problem as a tree.
// b) Implement the tree using recursion
// c) Test it

//2. Make it efficient
// a) Add a memo object
// b) Add a base case to return memo values
// c) store return values into the memo
