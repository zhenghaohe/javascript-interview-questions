// "    And   nothing hurts anymore, /t  I feel    kinda free.  /t/t We're    still    the   kids  /t we used to be,   yeah,   yeah"
//And nothing hurts anymore, I feel kinda free. We're still the kids we used to be, yeah, yeah

const removeWhiteSpaces = str => {
  let newStr = '';

  str = str.trim();
  newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i]===' ' || str[i]=== "\t") {
      if (str[i-1] !== ' ' && str[i-1] !== '\t' ) {
        newStr += ' ';
      }
    }
    else {
      newStr += str[i];
    }
  }

  return newStr;
}

const removeWhiteSpaces2 = str => {
  let newStr = '';

  for (var i = 0; i < str.length; i++) {
    while (str[i] === ' ' || str[i] === '\t') {
      i++;
    }
    newStr += ' ';
    while (str[i] !== ' ' && str[i] !== '\t' && str[i] !== undefined) {
      newStr += str[i];
      i++;
    }
  }

  return newStr.trim();
}

const removeWhiteSpaces3 = str => {
  let newStr = '';
  let count = 0;

  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || str[i]=== "\t") {
      count = 1;
    }
    else {
      if (count === 1) {
        newStr += " ";
        count = 0;
      }
      newStr += str[i];
    }
  }

  return newStr;
}



const str = "    And   nothing hurts anymore, \t  I feel    kinda free.  \t We're    still    the   kids  \t we used to be,   yeah,   yeah";
const str2 = "And nothing hurts anymore, I feel kinda free. We're still the kids we used to be, yeah, yeah";
const str3= "a  \t\tb"
console.log(removeWhiteSpaces3(str3));
