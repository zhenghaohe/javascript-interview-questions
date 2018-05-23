function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === i && string.indexOf(string[i], i + 1) === -1) {
            return string[i];
        }
    }
    return null;
}


function firstNonRepeatedCharacter2(string) {
  return  string.split('').
          filter((char,index,self) => self.indexOf(char)===index && self.indexOf(char,index+1)===-1)[0];
}

let someString = 'aabcbd';
let someString2 = 'zhennzhaohe';
console.log(firstNonRepeatedCharacter2(someString2));
