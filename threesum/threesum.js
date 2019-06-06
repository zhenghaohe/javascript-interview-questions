function threeSum(arr) {
  arr.sort((a,b) => a-b);
  const result = [];
  for (let [index, num] of arr.entries()) {
    if (num > 0) return result;
    if(num === arr[index-1]) continue;
    const rest = 0 - num;
    let right = arr.length - 1;
    let left = index + 1;
    while(right > left) {
      if (arr[right] + arr[left] === rest) {
        result.push([num, arr[left], arr[right]]);
        left++;
        right--;
        while(left < right && arr[left] === arr[left-1]) {
          left++;
        }
        while(left < right && arr[right] === arr[right+1]) {
          right--;
        }
      } else if (arr[right] + arr[left] > rest) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
