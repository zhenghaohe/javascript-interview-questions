var getMinimumDifference = function(root) {
  let diff = Infinity;
  let prev = null;

  inOrder(root);

  return diff;

  function inOrder(node) {
    if(!node) return;
    inOrder(node.left);
    if(prev !== null && diff > node.val - prev) {
      diff = node.val - prev;
    }
    prev = node.val;
    inOrder(node.right);
  }
};