// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
//
// Input: S = "3z4"
// Output: ["3z4", "3Z4"]
//
// Input: S = "12345"
// Output: ["12345"]

// solution 1
var letterCasePermutation = function(S) {
  const result = [];

  r('', S);

  return [...new Set(result)];

  function r(curr, rest) {
    if(rest.length === 0) return result.push(curr);
    r(curr + rest[0].toUpperCase(), rest.substr(1));
    r(curr + rest[0].toLowerCase(), rest.substr(1));
  }
}

// solution2 - dfs
var letterCasePermutation = function(S) {
  const arr = [];

  dfs(S.split(''));

  return arr;

  function dfs(str, i = 0) {
    if(str.length === i) return arr.push(str.join(''));
    dfs(str, i + 1);
    if (/[A-z]/.test(str[i])) {
      str[i] = String.fromCharCode(str[i].charCodeAt(0) ^ 32);
      dfs(str, i + 1);
      str[i] = String.fromCharCode(str[i].charCodeAt(0) ^ 32);
    }
  }
}


console.log(letterCasePermutation("a1b2"));

