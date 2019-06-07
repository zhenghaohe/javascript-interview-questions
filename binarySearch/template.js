function binarySearch(sortedArr, target) {
  let l = 0;
  let r = sortedArr.length;

  while(l < r) {
    const m = Math.floor(l + (r-l)/2);
    if (sortedArr[m] === target) return m;
    else if (sortedArr[m] > target) r = m;
    else l = m + 1;
  }

  return -1;
}

// template

function template() {
  while(l<r) {
    let m  = Math.floor((l + (r-l)/2));
    if (function () {
      //
    }) { // new range [l, m)
      r = m;
    } else {
      l = m + 1;  // new range [m+1, r)
    }
  }
  return l; // the smallest l that makes the if clause that encloses `r = m` to be true
}




