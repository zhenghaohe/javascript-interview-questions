// Given an expression string exp ,
// write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”

function areParenthesesBalanced(str) {
  const stack = [];
  let top;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
      continue;
    }

    if (!stack.length) return false;

    switch (str[i]) {
      case ')' :
        top = stack.pop();
        if (top !== '(') return false;
        break;

      case ']' :
        top = stack.pop();
        if (top !== '[') return false;
        break;

      case '}' :
        top = stack.pop();
        if (top !== '{') return false;
        break;
    }

  }
  return !stack.length
}

function areParenthesesBalanced(str) {
  const PARENTHESES = '{}[]()';
  const stack = [];

  for (let i = 0; i < str.length ; i++) {
    const currentParen = str[i];
    const position = PARENTHESES.indexOf(currentParen);
    if (position === -1) continue;

    if (position % 2 === 0) {
      stack.push(PARENTHESES[position + 1]);
    } else if (!stack.length || stack.pop() !== currentParen) {
      return false;
    }
  }

  return !stack.length
}
