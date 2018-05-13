//给定一个长度小于 50 且包含字母和数字的任意字符串，要求按顺序取出当中的数字和英文字母，数字需要去重，重新排列后的字符串数字在前，字母在后。

//solution 1
function handleStr (str) {
  let arr = str.split('');
  let words = '';
  let nums = '';

  arr.forEach(element => {
      if(/\d/.test(element)) nums += element;
      else if(/[a-zA-Z]/.test(element)) words += element;})

  return uniqueStr(nums) + words;
}

//remove duplicats
function uniqueStr(arr) {
  return arr.split('').filter((element,index) => index === arr.indexOf(element)).join('');
}

//solution 2(use str.match(regexp))
function handleStr2 (str) {
  let words = str.match(/[a-z]/gi).join('');// str.match() will return an Array containing the entire matched string
  let nums = str.match(/\d/g).join('');

  return uniqueStr(nums)+words;
}


console.log(handleStr2('携程C2t0r1i8p2020校招'));
