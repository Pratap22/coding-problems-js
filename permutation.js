// Given a number in the form of a list of digits, return all possible permutations.

// For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].

let permuteArr = [];
let visitedChar = [];

const getCombination = (input) => {
  let ch;
  for (let i = 0; i < input.length; i++) {
    //Get First char of the input
    ch = input.splice(i, 1)[0];

    //Add the character to the visited array
    visitedChar.push(ch);
    if (input.length === 0) {
      //If input is empty then insert visited array to permuteArr
      permuteArr.push(visitedChar.slice());
    }
    getCombination(input);
    input.splice(i, 0, ch);
    visitedChar.pop();
  }

  return permuteArr;
};

// console.log(getCombination([])); // [[1]] 1*1
console.log(getCombination([1, 2])); //[[1,2],[2,1]] 2 * 1
// console.log(getCombination([1, 2, 3])); //[[1,2,3],[1,3,2],[3,2,1],[2,3,1],[2,1,3],[3,1,2]] 3 * 2
