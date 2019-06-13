// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number.
// Return the maximum valued number you could get.

// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

var maximumSwap = function(num) {
  const nums = num.toString().split('');

  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i];
    let swap;
    let temp = curr;
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > temp && nums[j] > curr) {
        temp = nums[j];
        swap = j;
      }
    }

    if (temp !== curr) {
      [nums[i], nums[swap]] = [nums[swap], nums[i]];
      break;
    }
  }

  return +nums.join('');
}