// Input:
//   s = "abcxyz123"
// dict = ["abc","123"]
// Output:
//   "<b>abc</b>xyz<b>123</b>"
//
// Input:
//   s = "aaabbcc"
// dict = ["aaa","aab","bc"]
// Output:
//   "<b>aaabbc</b>c"

function boldWords(S, dict) {
  const mySet = new Set(dict);
  const maxLength = dict.reduce((prev, curr) => prev.length > curr.length ? prev : curr).length;
  const arr = Array(S.length).fill(0);
  let result = '';

  for (let i = 0; i < S.length; i++) {
    for (let j = Math.min(maxLength, S.length - i); j > 0; j--) {
      if (mySet.has(S.substr(i, j))) {
        for (let k = i; k < i + j; k++) {
          arr[k] = 1;
        }
        break;
      }
    }
  }

  for (let i = 0; i < S.length; i++) {
    if (arr[i]) result += `<b>${S[i]}</b>`;
    else result += S[i]
  }

  return result.replace(/<\/b><b>/g,'');
}


console.log(boldWords("abcxyz123", ["abc","123"]));
