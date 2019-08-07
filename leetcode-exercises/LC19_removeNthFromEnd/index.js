function removeNthFromEnd(head, n) {
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  // Move fast N nodes ahead of slow
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  // Move slow and fast up one node at a time until fast is at the last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
}

module.exports = removeNthFromEnd;
