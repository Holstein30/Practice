function removeNthFromEnd(head, n) {
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  // Move fast N nodes ahead of slow
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
}

module.exports = removeNthFromEnd;
