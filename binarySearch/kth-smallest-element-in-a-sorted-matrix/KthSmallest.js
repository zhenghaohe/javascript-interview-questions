// Given a n x n matrix where each of the rows and columns are sorted in ascending order,
// find the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.
//
// matrix = [
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
// ],
//   k = 8,
//
// return 13.


// Version One : flatten the array and sort
function kthSmallest(matrix, k) {
  for (let i = 0; i < matrix.length ; i++) {
    if (Array.isArray(matrix[i])){
      matrix.splice(i, 1, ...matrix[i--]);
    }
  }

  return matrix.sort((a,b) => a-b)[k-1];
}

// Version two: use binary search
function kthSmallest(matrix, k) {
  let l = matrix[0][0];
  let r = matrix[matrix.length - 1][matrix.length - 1];

  while(l < r) {
    const m = Math.floor(l + (r - l)/2);
    const count = matrix.reduce((count, row) => count + row.filter(num => num <= m).length, 0);

    if (count >= k) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}