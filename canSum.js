//Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as an arguments.

//The function should return a boolean indicating weather or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times needed. You may assume that all input numbers are non-negative.

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;

  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));
