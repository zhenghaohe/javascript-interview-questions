//A string is a palindrome if it reads the same from left-to-right as it does right-to-left.
//e.g “nolemonnomelon”, “racecar” & “neveroddoreven” are all palindromes.
//A string is an anagram of another string if it consists of exactly the same characters but in another order.
//e.g The string “carrace” is an anagram of “racecar”.
//such that it returns True if the string str is an anagram of a palindrome, and otherwise returns False.
//You may assume that str contains only lowercase characters a-z and is not empty.
//e.g Given str = “carrace” the function should return True as it is an anagram of the palindrome “racecar”.
//Given str = “tangent” the function should return False as while it is an anagram,
//it is not possible that it is an anagram of a palindrome.
//We are not dealing with English words here, “bbcbb” is still a palindrome.

const PalindromeFinder = str => {
  const map = {};
  str.split('').forEach(char=>{
    map[char] ? map[char]++ : map[char] = 1;
  })
  return Object.keys(map).reduce((prev,char) => {
    if (map[char]%2===1) prev++;
    return prev;
  },0) < 2;
}

console.log(PalindromeFinder('carrace'));
