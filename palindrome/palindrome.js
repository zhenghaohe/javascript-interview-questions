// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//the easiest way
const palindrome = str => {
  str = str.replace(/\W/g,'').toLowerCase();
  return str===str.split('').reverse().join('');
}

//iterative solutuon
const palindrome2 = str => {
  str = str.replace(/\W/g,'').toLowerCase();
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-i-1]) return false;
  }
  return true;
};

//iterative solutuon with 'every' helper
const palindrome3 = str => {
  return str.replace(/\W/g, '').toLowerCase()
    .split('').every((char, i, self) => char === self[self.length-i-1]);
}
