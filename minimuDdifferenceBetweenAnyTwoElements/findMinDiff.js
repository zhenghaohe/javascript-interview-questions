// Input  : {1, 5, 3, 19, 18, 25};
// Output : 1
// Minimum difference is between 18 and 19
//
// Input  : {30, 5, 20, 9};
// Output : 4
// Minimum difference is between 5 and 9
//
// Input  : {1, 19, -4, 31, 38, 25, 100};
// Output : 5
// Minimum difference is between 1 and -4


// brute force O(n^2)
function findMinDiff2(arr) {
  let diff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const temp = Math.abs(arr[i] - arr[j]);
      if (temp < diff) diff = temp;
    }
  }
  return diff;
}

// Sort array in ascending order and
// compare all adjacent pairs in sorted array and keep track of minimum difference
// O(n Log n)

function findMinDiff(arr) {
  const newArr = arr.slice().sort((a,b) => a-b);
  let diff = Infinity;

  for (let i = 0; i < newArr.length - 1; i++) {
    const temp = newArr[i+1] - newArr[i];
    if (temp < diff) diff = temp;
  }

  return diff;
}


const arr = [1, 19, -4, 31, 38, 25, 100];
console.log(findMinDiff(arr));