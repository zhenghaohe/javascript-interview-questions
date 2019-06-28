// solution 1: time complexity: O(n^3)
var longestPalindrome = function(s) {
  let result = s[0] || '';
  for (let i = 0; i < s.length; i++) {
    for (let k = s.length - 1; k > i; k--) {
      if (isPalindrome(s,i,k)) {
        result = result.length < (k + 1 - i) ? s.slice(i, k + 1) : result;
        break;
      }
    }
  }

  return result;
};

function isPalindrome(str, left, right) {
  while(left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }

  return left >= right;
}


// solution2: time complexity: O(n^2)
var longestPalindrome = function(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (const j of [0, 1]) {
      let left = i;
      let right = i + j;
      while (left >= 0 && s[left] === s[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }

    // No better move exists
    if (Math.ceil(max.length / 2) >= s.length - i) break;
  }
  return max;
};