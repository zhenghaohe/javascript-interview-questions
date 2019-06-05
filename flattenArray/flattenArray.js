var nested = [3,[1,'hey',[2, 'you',[2,5]]],1,[9,[{},[2,true]]]];

// recursive approach
function flatten(arr) {
  return arr.reduce((prev, curr) => {
    return Array.isArray(curr) ? prev.concat(flatten(curr)) : prev.concat(curr)
  }, [])
}

// tail-call optimised recursive approach
const scalar = v => !Array.isArray(v);
const flatten = (deep, flat = []) => {
  if (deep.length === 0) return flat;
  let [head, ...tail] = deep;
  if (scalar(head)) {
    return flatten(tail, flat.concat(head));
  } else {
    return flatten(tail, flat.concat(flatten(head)));
  }
}

// iterative approach
function flatten(arr) {
  const cp = [].concat(arr);
  for (let i = 0; i< cp.length ; i++) {
    if (Array.isArray(cp[i])) {
      cp.splice(i,1, ...cp[i--]);
    }
  }
  return cp;
}

console.log(flatten(nested));