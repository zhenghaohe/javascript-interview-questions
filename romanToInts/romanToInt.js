var romanToInt = function(s) {
  let result = 0;
  const str = s.split('');
  const myMap = new Map();
  myMap.set('I', 1)
    .set('V', 5)
    .set('X', 10)
    .set('L', 50)
    .set('C', 100)
    .set('D', 500)
    .set('M', 1000);

  str.forEach((char, index) =>
    myMap.get(char) < myMap.get(str[index + 1])
      ? result-=myMap.get(char) : result+=myMap.get(char));

  return result;
}