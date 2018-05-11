// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.

//naive iterative approach with O(n^2) runtime complexity
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i]+nums[j] === target) return [i,j];
    }
  }
}

//using a map object with O(n) runtime complexity
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[target - nums[i]]) map[nums[i]] = i;
    else return [map[target - nums[i]],i];
  }
}


console.log(twoSum([2, 7, 11, 15],18));
