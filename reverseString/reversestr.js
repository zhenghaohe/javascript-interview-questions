// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//the easiest way
function reverse(str) {
  return str.split('').reverse().join('');
}

//iterative solution
function reverse3(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

//use "reduce" helper
function reverse2(str) {
  return str.split('').reduce((newStr,char)=>char+newStr,'');
}
