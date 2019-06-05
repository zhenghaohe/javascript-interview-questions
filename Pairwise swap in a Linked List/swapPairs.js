var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const firstNode = head;
  const secondNode = head.next;

  firstNode.next = secondNode.
  secondNode.next = firstNode;

  head = secondNode;

  head.next.next = swapPairs(head.next.next);

  return head;
}