const removeWhiteSpaces = str => str.split(' ').join('')
const removeWhiteSpaces2 = str => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i]!==' ') arr.push(str[i]);
  }
  return arr.join('');
}
const removeWhiteSpaces3 = str => str.replace(/\s/g,"")

console.log(removeWhiteSpaces3('    zhen     h '));
