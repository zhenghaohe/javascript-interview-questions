// solution 1 : in order
var isValidBST = function(root) {
  let prev = null;

  return inOrder(root);

  function inOrder(node) {
    if(!node) return true;
    if(!inOrder(node.left)) return false;
    if(prev !== null && prev >= node.val) return false;
    prev = node.val;
    if(!inOrder(node.right)) return false;
    return true;
    return inOrder(node.right)
  }
}

// solution2: recursion
var isValidBST = function(root) {
  return r(root, -Infinity, Infinity);

  function r(node, min, max) {
    if(!node) return true;
    if(node.val <= min || node.val >= max) return false;
    return r(node.left, min, node.val) && r(node.right, node.val, max);
  }
}
