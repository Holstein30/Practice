function mergeTwoLists(l1, l2) {
  const dummyHead = { next: null };

  let tail = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      tail = tail.next;
      li = li.next;
    }
  }
}

module.exports = mergeTwoLists;
