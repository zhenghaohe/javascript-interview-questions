// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//solution 1 - use a hash table
const anagrams = (stringA,stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }

  return true;
  }


const buildCharMap = str => {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g,"").toLowerCase()) { // or str.replace(/\W/g,'').toLowerCase()
    charMap[char]?charMap[char]++:charMap[char]=1;
  }

  return charMap;
}

//solution 2 - sort the strings
const anagrams2 = (stringA,stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = str => {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
