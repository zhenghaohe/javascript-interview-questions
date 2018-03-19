// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//the easiest way
function palindrome(str) {
  str = str.replace(/\W/g,'').toLowerCase();
  return str===str.split('').reverse().join('');
}

//iterative solutuon
function palindrome2(str) {
  str = str.replace(/\W/g,'').toLowerCase();
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-i-1]) return false;
  }
  return true;
};

//iterative solutuon with 'every' helper
function palindrome3(str) {
  str = str.replace(/\W/g,'').toLowerCase();
  return str.split('').every((char,i)=>char === str[str.length-i-1]);
}
