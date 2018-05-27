//remove duplicates in string

//brute force
const removeDup0 = str => {
  str = str.split(' ');
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        str[j] = '';
      }
    }
  }
  return str.join(' ');
}

//use filter helper
const removeDup = string => {
  return string.toLowerCase().split(' ').filter((val,index,self) => self.indexOf(val) === index).join(' '); //filter returns a new array with the elements that pass the test.
}

//use reduce and indexOf helper
const removeDup2 = string => {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    // if (!previous.find(prev => prev===word)) previous.push(word);
    if (previous.indexOf(word)===-1) previous.push(word); //indexof returns -1 if it is not present.
    return previous;
  },[]).join(' ');
}

const removeDup3 = string => {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    if (previous.indexOf(word)===-1) previous.push(word);
    return previous;
  },'');
}

//use a map object
const removeDup4 = string => {
  const chars = {};
  return string.toLowerCase().split(' ').reduce( (newStr,char) => {
    if (!chars[char]) {
      chars[char] = true;
      newStr.push(char);
    }
    return newStr;
  },[]).join(' ');
}

// console.log(removeDup4('Today is a good day today'));
console.log(removeDup0('Today is a good day today tODAy tOday GOod'));
