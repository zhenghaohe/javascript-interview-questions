// Time complexity :Best case - O(nlogn). Worse case - O(n^2)
// In-place: space complexity - O(logn) for maintaining the call stack
// Worse case happens when we always choose the rightmost element with an sorted array

const quickSort = (arr,left = 0,right = arr.length-1) => {
  if (left >= right) return; //base case
  const index = partition(arr, left, right);
  quickSort(arr, left, index-1);
  quickSort(arr, index+1, right);
};

const partition = (arr,left,right) => {
 const pivot = arr[right];
 let index = left;
 for (let i = left; i < right ; i++) {
   if (arr[i] < pivot) {
     [arr[i], arr[index]] = [arr[index], arr[i]];
     index++;
   }
 }
 [arr[index], arr[right]] = [arr[right], arr[index]];
 return index;
}

const arr1 = [3,4,5,7,3,1,3,4,6,8,3,1,1,4,7,9,3];
quickSort(arr1);
console.log(arr1);
const arr2 = [];
quickSort(arr2);
console.log(arr2);
const arr3 = [3];
quickSort(arr3);
console.log(arr3);
const arr4 = [4,3];
quickSort(arr4);
console.log(arr4);
const arr5 = [5,4,3];
quickSort(arr5);
console.log(arr5);


// Not in-place quicksort
// space-complexity - O(n)
const quickSort2 = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
}
