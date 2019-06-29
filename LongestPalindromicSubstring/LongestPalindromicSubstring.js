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
function longestPalindrome(str) {
  let result = [0, 1];
  let maxLength = 1;
  for (let i = 1; i < str.length; i++) {
    const even = getLongestPalindromeFrom(str, i - 1, i);
    const odd = getLongestPalindromeFrom(str, i - 1, i + 1);
    maxLength = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
    result = maxLength[1] - maxLength[0] > result[1] - result[0] ? maxLength : result;
  }

  return str.slice(result[0], result[1]);
}

function getLongestPalindromeFrom(str, start, end) {
  while(start >= 0 && end < str.length) {
    if (str[start] !== str[end]) {
      break;
    }
    start--;
    end++;
  }
  return [start + 1, end];
}