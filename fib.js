//Very slow for bigger numbers
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//Space complexity: O(2^n)
//Time complexity: O(n)
//Time taken to execute fib(50): 140017.937ms

//using memoization
const fibDynamic = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
  return memo[n];
};

//Space complexity: O(n)
//Time complexity: O(n)
//Time taken to execute fibDynamic(50): 15.333ms

// console.log(fib(2));
console.time("Fib");
// console.log(fib(50));
console.log(fibDynamic(50));
console.timeEnd("Fib");
// console.log(fib(34));
// console.log(fib(7));
