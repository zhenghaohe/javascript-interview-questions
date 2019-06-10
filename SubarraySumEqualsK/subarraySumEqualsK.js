// Given an array of integers and an integer k,
// you need to find the total number of continuous subarrays whose sum equals to k.
//
// Input: nums = [1,1,1], k = 2
// Output: 2

// solution 1: T : O(n^2) S: O(n)

var subarraySum = function(nums, k) {
  let count = 0;
  const dict = nums.reduce((prev, curr, index) => {
    prev[index + 1] = prev[index] + curr;
    return prev;
  }, {0:0});

  for (let i = 0; i < nums.length ; i++) {
    for (let j = i; j < nums.length; j++) {
      if ((dict[j+1] - dict[i]) === k) count++;
    }
  }

  return count;
}

// solution 2: T : O(n) S: O(n)
var subarraySum = function(nums, k) {
  let sum = 0;
  let count = 0;
  const myMap = new Map();
  myMap.set(0, 1);

  for (let num of nums) {
    sum += num;
    count += myMap.get(sum - k) || 0;
    myMap.set(sum, (myMap.get(sum) || 0) + 1);
  }

  return count;
}


console.log('1' - '1');