function isSameTree(p, q) {
  let sameTree = true;

  function checkSameNode(p, q) {
    if (!p && !q) {
      return;
    } else if (!p || !q) {
      sameTree = false;
      return;
    } else if (p.val !== q.val) {
      sameTree = false;
      return;
    }

    checkSameNode(p.left, q.left);
    checkSa
    
    checkSameNode(p, q);
}

module.exports = isSameTree;
