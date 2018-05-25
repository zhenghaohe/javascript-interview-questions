// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
const reverseInt = n => {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed)*Math.sign(n);
}

const reverseInt2 = n => {
  let result = 0;
  while(n) {
    result = result*10 + n%10;
    n = parseInt(n/10);
  }
  if(result> Math.pow(2,31) || -result>Math.pow(2,31)) result = 0;
  return result;
}


console.log( reverseInt2(-90));
