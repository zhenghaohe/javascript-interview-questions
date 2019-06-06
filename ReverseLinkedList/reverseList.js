// iterative approach
// time - O(n) space  - O(1)
function reverseList(head) {
  if (!head) return head;
  let curr = head.next;
  let newHead = head;
  while(curr) {
    head.next = curr.next;
    curr.next = newHead;
    newHead = curr;
    curr = head.next;
  }
  return newHead;
}


// recursive approach
function reverseList(head) {
  // time - O(n) space  - O(n)
  function r(node, prev = null) {
    if (!next) return node;
    const next = node.next;
    node.next = prev;
    return r(next, node);
  }

  return head ? r(head) : head;
}

