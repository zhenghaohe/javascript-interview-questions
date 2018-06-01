//Segregate 0s and 1s in an array
const segregate0and1 = arr => {
  for (let i = 0, j = -1; i < arr.length; i++) {
    if (arr[i]===0) {
      j++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

const segregate0and1_2 = arr => {
  let left = 0, right = arr.length - 1;
  while(left < right) {
    while(arr[left] === 0 && left < right) left++;
    while(arr[right] === 1 && left < right) right--;
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}

console.log(segregate0and1_2([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]));
