// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(str) {
  for (let i = 0;i < str.length; i++) {
    str.splice(i, 0, str.pop());
  }
  return str;
}

function reverseString(str) {
  for (let i = 0; i < str.length/2 ; i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]]
  }
  return str;
}

console.log(reverseString(["h","e","l","l","o"]));

