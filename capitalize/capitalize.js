// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase()+word.slice(1));
  }

  return words.join(' ');
}

const capitalize2 = str => {
  let words = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    words += str[i-1] === ' ' ? str[i].toUpperCase() : str[i];
  }

  return words;
}


const capitalize3 = str => {
  return str.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ');
}

const capitalize4 = str => {
  return str.split(' ').reduce( (newStr,word) => {
    newStr.push(word[0].toUpperCase()+ word.slice(1));
    return newStr;
  },[]).join(' ');
}



console.log(capitalize4('a short sentence'));
