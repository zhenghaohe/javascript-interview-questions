function findKthLargest(nums, k) {
  let start = 0;
  let end = nums.length - 1;
  while(start <= end) {
    let index  = partition(nums, start, end);
    if (index === k - 1) {
      return nums[index];
    } else if (index < k - 1) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }
}

const partition = (arr,left = 0,right = arr.length - 1) => {
  const pivot = arr[right];
  let index = left;
  for (let i = left; i < right ; i++) {
    if (arr[i] > pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[index], arr[right]] = [arr[right], arr[index]];
  return index;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));