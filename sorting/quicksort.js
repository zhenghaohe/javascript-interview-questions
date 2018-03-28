const quickSort = (arr,left = 0,right = arr.length-1) => {
  if (left >= right) return; //base case
  const pivot = left; //pick the leftmost element as the pivot
  const index = partition(arr, left, right);
  quickSort(arr, left, index-1);
  quickSort(arr, index+1, right);
};

const partition = (arr,left,right) => {
  const pivot = arr[left];
  let i = left+1; //split between elements bigger than pivot and less than pivot
  for (let j = left; j <= right; j++) { //split between partioned part and unpartitioned partioned
    if (pivot>arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i++] = temp;
    }
  }
  let temp = arr[--i];
  arr[left] = temp;
  arr[i] = pivot;
  return i;
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
