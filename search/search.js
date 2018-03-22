function binarySearch(arr,k) {
  let  l = 0,r = arr.length-1;
  while(l<=r) {
    let m = l + Math.floor((r-l)/2);
    if (arr[m] === k) {
      return m;
    }else if (arr[m]>k) {
      r = m-1;
    }else{
      l = m+1;
    }
  }
  return -1;
}

let arr=[1,3,4,7];
console.log(binarySearch(arr,7));
