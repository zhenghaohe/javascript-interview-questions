//balanced parentheses
// Balanced parentheses means that each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.
// Consider the following correctly balanced strings of parentheses:
// (()()()())
// (((())))
// (()((())()))

//use reduce helper
const balancedParens = string => {
  return string.split('').reduce((count,char)=> {
    if (count<0) return NaN; // ')('
    return count += char === '(' ? 1 : -1;
  }, 0) === 0;
}

//use forEach helper
const balancedParens2 = string => {
   let counter = 0;
   string.split('').forEach(char => {
     counter += char === "(" ? 1: -1;
     if (counter === -1) counter = NaN; // ')('
   });
   return counter===0;
 }


 //use every helper and stack
const balancedParens3 = string => {
  let stack = [];
  return [...string].every(char => char === '(' ?
                        stack.push('(') : //push() return the new length of the array.
                        stack.pop(')')) //pop() on an empty array, it returns undefined.
  && !stack.length;
}


console.log(balancedParens('()'));
console.log(balancedParens3('()()'));
