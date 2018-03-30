//remove duplicates in string

//use filter helper
function removeDup(str) {
  return str.split(' ').filter((val,index,self) => self.indexOf(val) === index).join(' ');
}

//use reduce and find helper
function removeDup2(string) {
  return string.toLowerCase().split(' ').reduce((previous,word)=>{
    if (!previous.find(prev => prev===word)) previous.push(word);
    return previous;
  },[]).join(' ');
}
