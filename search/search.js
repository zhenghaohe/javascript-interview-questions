function binarySearch(arr,k) {
  let  l = 0,r = arr.length-1;
  while(l<=r) {
    let m = l + parseInt((r-l)/2);
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
