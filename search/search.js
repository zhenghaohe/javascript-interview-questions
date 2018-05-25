//iterative approach
const binarySearch = (arr,k) => {
  let l = 0, r = arr.length-1;
  while(l <= r) {
    let m = l + parseInt((r-l)/2);
    if (arr[m] === k) return m;
    if (arr[m] > k) r = m-1;
    else l = m+1;
    }
  return -1;
}

//recursive approach
const binarySearch2 = (arr, k, l = 0, r = arr.length) => {
  if(l > r) return -1;
  let m = l + parseInt((r-l)/2);
  if (k === arr[m]) return m;
  if (k<arr[m]) return binarySearch2(arr,k,l,m-1);
  else return binarySearch(arr,k,m+1,r);
}

console.log(binarySearch2([5,7,12,16,36,99,111],111));
console.log(binarySearch2([5],7));
console.log(binarySearch2([],7));
