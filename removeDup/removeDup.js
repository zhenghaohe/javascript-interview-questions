//remove duplicates in string

//use filter helper
function removeDup(str) {
  return str.split(' ').filter((val,index,self) => self.indexOf(val) === index).join(' '); //A new array with the elements that pass the test.
}

//use reduce and indexOf helper
function removeDup2(string) {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    // if (!previous.find(prev => prev===word)) previous.push(word);
    if (previous.indexOf(word)===-1) previous.push(word); //indexof returns -1 if it is not present.
    return previous;
  },[]).join(' ');
}

function removeDup3(string) {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    if (previous.indexOf(word)===-1) previous.push(word);
    return previous;
  },'');
}


// console.log(removeDup2('Today is a good day today'));

console.log('zhenghao he'.indexOf('hao'));
