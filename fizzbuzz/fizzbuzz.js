// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//Using %
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i.toString());
    }
  }
}

//not using %
function fizzBuzz2(n) {
  let Fizz = 3;
  let Buzz = 5;
  for (let i = 1; i <= n; i++) {
    Fizz--;
    Buzz--;
    if (Fizz === 0) {
      if (Buzz === 0) {
        console.log("FizzBuzz");
        Buzz=5;
        Fizz=3;
      }else{
        console.log("Fizz");
        Fizz=3;
      }
    }
    else if(Buzz === 0){
      console.log('Buzz');
      Buzz = 5;
    }else{
      console.log(i.toString());
    }
  }
}
