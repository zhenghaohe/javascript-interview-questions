// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//using a map object
function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    chars[char]?chars[char]++:chars[char]=1;
    if (chars[char]>max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//using filter helper
function maxChar2(str) {
 let maxCount = 0;
 let maxChar = '';

 for (let char of str) {
  const count = str.split('').filter(item => item === char).length;
  if (count > maxCount) {
    maxChar = char;
    maxCount = count;
 }}
 
 return maxChar;
}
