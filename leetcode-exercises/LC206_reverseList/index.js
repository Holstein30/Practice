const reverseList = head => {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;

    // Change direction
    current.next = prev;
  }
};

module.exports = reverseList;
