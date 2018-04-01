// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//the easiest way
function reverse(str) {
  return str.split('').reverse().join('');
}

//use "reduce" helper
function reverse2(str) {
  return str.split('').reduce((newStr,char)=>char+newStr,'');
}

//iterative solution
function reverse3(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

//the recursive way
function reverse4(str) {
  if (str === '') return '';
  return reverse4(str.substr(1))+str[0] // or str.slice(1)
}



console.log(reverse2('str'));
