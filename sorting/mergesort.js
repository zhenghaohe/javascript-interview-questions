// Implement mergeSort

// recursively subdivide this input array
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right =  arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right))

}

//take two sorted arrays and join them into one sorted array
function merge(left, right) {
  const results = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }else{
      results.push(right.shift());
    }
  }
  return [...results,...left,...right];
}
