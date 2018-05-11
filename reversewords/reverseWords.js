//‘Coding JavaScript -> 'gnidoC tpircSavaJ'
const reverseWords = str => {
  let newStr = [];
  str.split(' ').forEach(word=>newStr.push(word.split('').reverse().join('')));
  return newStr.join(' ')}


//‘Coding JavaScript -> 'JavaScript Coding'
const reverseWords2 = str => str.split(' ').reduce((newStr,word)=>word+' '+newStr,'');

console.log(reverseWords('Coding JavaScript'));
console.log(reverseWords2('Coding JavaScript'));
