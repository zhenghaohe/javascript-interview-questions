// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
// the decimal part is truncated, 2 is returned.

function mySqrt(x) {
  let l = 0;
  let r = x + 1;

  while(l < r) {
    let m = Math.floor(l + (r - l)/2);
    if ( m * m > x) {
      r = m;
    } else {
      l = m +1;
    }
  }

  return l - 1;
}

console.log(mySqrt(0));