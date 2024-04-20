/**
 * TODO:
 * 1. Create a function named minimal with the following conditions:
 * - Accepts two number arguments, a and b.
 * - Returns the smallest value between a or b.
 * - If both values are equal, then return the value of a.
 *
 * Example:
 * minimal(1, 4) // output: 1
 * minimal(3, 2) // output: 2
 * minimal(3, 3) // output: 3
 *
 * Create a function called findIndex that accepts two parameters, an array and a number.
 * The function must return the index of the corresponding number in the array.
 * If the number is not found, then return the value -1.
 *
 * Example:
 * findIndex([1, 2, 3, 4, 5], 3) // output: 2
 * findIndex([1, 2, 3, 4, 5], 6) // output: -1
 * findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */
// Write the code below
//TODO 1
function minimal(a,b){
    return a === b ? a : Math.min(a, b);
  }
  //TODO 2
  function findIndex(array, number){
    return array.indexOf(number);
  }
  // Testing with console.log()
console.log("Result minimal(1, 4):", minimal(1, 4)); // Output: 1
console.log("Result minimal(3, 2):", minimal(3, 2)); // Output: 2
console.log("Result minimal(3, 3):", minimal(3, 3)); // Output: 3
console.log("Result findIndex([1, 2, 3, 4, 5], 3):", findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
console.log("Result findIndex([1, 2, 3, 4, 5], 6):", findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
console.log("Result findIndex([1, 2, 3, 4, 5], 5):", findIndex([1, 2, 3, 4, 5], 5)); // Output: 4