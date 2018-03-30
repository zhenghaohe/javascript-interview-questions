//remove duplicates in string

//use filter helper
function removeDup(str) {
  return str.split(' ').filter((val,index,self) => self.indexOf(val) === index).join(' ');
}

//use reduce and indexOf helper
function removeDup2(string) {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    // if (!previous.find(prev => prev===word)) previous.push(word);
    if (previous.indexOf(word)===-1) previous.push(word); //indexof returns -1 if it is not present.
    return previous;
  },[]).join(' ');
}


console.log(removeDup2('Today is a good day today'));
