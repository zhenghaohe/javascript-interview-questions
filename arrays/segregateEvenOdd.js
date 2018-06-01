//Segregate Even and Odd numbers
//Given an array A[], write a function that segregates even and odd numbers. The functions should put all even numbers first, and then odd numbers.
const rearrangeEvenAndOdd = arr => {
  for (let i = 0, j = -1; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      j++;
      [arr[j],arr[i]] = [arr[i],arr[j]];  // destructuring
    }
  }
  return arr;
}

console.log(rearrangeEvenAndOdd([12, 34, 45, 9, 8, 90, 3]));
