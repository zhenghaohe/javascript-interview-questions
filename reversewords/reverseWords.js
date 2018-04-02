//‘Coding JavaScript -> 'gnidoC tpircSavaJ'
function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  wordsArr.forEach(word=>{
    reversedWordsArr.push(word.split('').reduce((newWord,char)=>char+newWord,''));
  })
  return reversedWordsArr.join(' ');
}

//‘Coding JavaScript -> 'JavaScript Coding'
function reverseWords2(string) {
  return string.split(' ').reduce((newStr,word)=>{
    newStr.unshift(word);
    return newStr;
  },[]).join(' ');
}


console.log(reverseWords('Coding JavaScript'));
console.log(reverseWords2('Coding JavaScript'));
