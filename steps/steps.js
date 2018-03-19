// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterative solution
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col<=row) {
        stair += '#'
      }else{
        stair += ' '
      }
    }
    console.log(stair);
  }
}

//recursive solution
function helper(n,row) {
  return '*'.repeat(row)+' '.repeat(n-row);
}

function steps2(n,row=1) {
  if (row>n) return;
  console.log(helper(n,row));
  return steps2(n,row+1)
}

//iterative solution2
function steps3(n) {
  const rows='#'.repeat(n).split('');
  rows.map((row,index)=> console.log(row+'#'.repeat(index)+' '.repeat(n-index-1)));
}
