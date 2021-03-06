//Find closest number in array
//Given an array of sorted integers. We need to find the closest value to the given number. Array may contain duplicate values and negative numbers.

//use reduce helper
const closest = (arr, target) => arr.reduce((prev, cur) => Math.abs(prev - target) > Math.abs(cur - target) ? cur : prev);

const arr = [2, 4, 5, 9, 21];
const goal = 17;
console.log(closest(arr,goal));


//modify binary search
const closest2 = (arr, target) => {
  let l = 0, r = arr.length-1;
  while(r - l > 1) {
    let mid = Math.floor((l+r)/2);
    if (arr[mid] > target) {
      r = mid;
    } else{
      l = mid;
    }
  }
  return target - arr[l] <= arr[r] - target ?  arr[l] : arr[r];
}

console.log(closest2([2, 4, 5, 9, 21],13));
