// Input: [1,3,5,6], 5
// Output: 2

function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length;

  while(l < r) {
    const m = Math.floor(l + (r - l)/2);
    if (nums[m] >= target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}