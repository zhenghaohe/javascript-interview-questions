// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//the easiest way
const reverse = str => str.split('').reverse().join('');


//use "reduce" helper
const reverse2 = str => str.split('').reduce((newStr,char)=>char+newStr,'').join('');


//iterative solution
const reverse3 = str => {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

//the recursive way
const reverse4 = str => {
  if (str === '') return '';
  return reverse4(str.substr(1))+str[0] // or str.slice(1)
}



console.log(reverse3('123'));
