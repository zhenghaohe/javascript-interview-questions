//balanced parentheses
// Balanced parentheses means that each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.
// Consider the following correctly balanced strings of parentheses:
// (()()()())
// (((())))
// (()((())()))

//use reduce helper
function balancedParens(string) {
  return !string.split('').reduce((previous,char)=> {
    if (previous<0) return previous; // ')('
    if (char === '(') return ++previous;
    if (char === ')') return --previous;
    return previous;
  },0);
}

//use forEach helper
function balancedParens2(string) {
   let counter = 0;
   string.split('').forEach(char => {
     counter += char === "(" ? 1: -1;
     if (counter === -1) counter = NaN; // ')('
   });
   return counter===0;
 }


 //use every helper and stack
function balancedParens3(string) {
  let stack = [];
  return [...string].every(char => char === '(' ?
                        stack.push('(') : //push() return the new length of the array.
                        stack.pop()) //pop() on an empty array, it returns undefined.
  && !stack.length;
}


console.log(balancedParens2(')()'));
console.log(balancedParens3('()()'));
