// Given two arrays, write a function to compute their intersection.
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]


// Solution 1, using Set
function intersection(l1, l2) {
  const Set1 = new Set(l1);
  return [...new Set(l2.filter(item => Set1.has(item)))];
}

// Solution 2, sorting the array and using two pointers.
function intersection(l1, l2) {
  l1.sort((a,b) => a-b);
  l2.sort((a,b) => a-b);
  const result = [];
  let l1Index = 0;
  let l2Index = 0;

  while((l1[l1Index] && l2[l2Index]) !== undefined) {
    const currentL1 = l1[l1Index];
    const currentL2 = l2[l2Index];
    if (currentL1 === currentL2) {
      result.push(currentL1);
      while(currentL1 === l1[l1Index]) l1Index++;
      while(currentL2 === l2[l2Index]) l2Index++;
    } else if (currentL1 > currentL2) {
      while(currentL2 === l2[l2Index]) l2Index++;
    } else {
      while(currentL1 === l1[l1Index]) l1Index++;
    }
  }

  return result;
}

// Solution 3, sorting the array and using binary search
function intersection(l1, l2) {
  const mySet = new Set();
  l1.sort((a,b) => a-b);

  for (let item of l2) {
    if (search(l1, item) !== -1) mySet.add(item);
  }

  return [...mySet];


  function search(arr, target) {
    let l = 0;
    let r = arr.length;
    while(l < r) {
      let m = Math.floor(l + (r - l)/2);
      if (arr[m] === target) return m;
      if (arr[m] > target) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    return -1;
  }
}