//remove duplicates in string
function removeDup(str) {
  return str.split(' ').filter((val,index,self) => self.indexOf(val) === index).join(' ');
}
