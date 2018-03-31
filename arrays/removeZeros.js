// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//iterative approach
const moveZeroes = function(arr) {
  let i = -1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
        arr[++i] = arr[j];
        arr[j] = 0;
    }
  }
  return arr;
}


console.log(moveZeroes([0, 1, 0, 3, 12]));
