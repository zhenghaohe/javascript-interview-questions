//Segregate Even and Odd numbers
//Given an array A[], write a function that segregates even and odd numbers. The functions should put all even numbers first, and then odd numbers.
const rearrangeEvenAndOdd1 = arr => {
  for (let i = 0, j = -1; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      j++;
      [arr[j],arr[i]] = [arr[i],arr[j]];  // destructuring
    }
  }
  return arr;
}

const rearrangeEvenAndOdd2 = arr => {
  let left = 0, right = arr.length - 1;
  while(left < right) {
    while(arr[left]%2 === 0 && left < right) left++;
    while(arr[right]%2 === 1 && left < right) right--;
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}

console.log(rearrangeEvenAndOdd2([12, 34, 45, 9, 8, 90, 3, 2]));
