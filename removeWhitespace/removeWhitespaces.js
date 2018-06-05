// "    And   nothing hurts anymore, /t  I feel    kinda free.  /t We're    still    the   kids  /t we used to be,   yeah,   yeah"
//And nothing hurts anymore, I feel kinda free. We're still the kids we used to be, yeah, yeah

const removeWhiteSpaces = str => {
  let newStr = '';

  str = str.trim();
  newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i]===' ' || str[i]==="/t") {
      if (str[i-1] !== ' ' && str[i-1]!=='/t') {
        newStr += str[i];
      }
    }
    else {
      newStr += str[i];
    }
  }

  return newStr;
}



const str = "    And   nothing hurts anymore,   I feel    kinda free.   We're    still    the   kids   we used to be,   yeah,   yeah";
const str2 = "And nothing hurts anymore, I feel kinda free. We're still the kids we used to be, yeah, yeah";
console.log(removeWhiteSpaces(str)===str2);
