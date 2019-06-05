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
    let newHead = node;
    if (node.next) newHead = r(node.next, node);
    node.next = prev;
    return newHead;
  }

  return head ? r(head) : head;
}

