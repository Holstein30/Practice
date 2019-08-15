function levelOrder(root) {
  const res = [];

  function helper(node, depth) {
    if (!node) return;

    if (!res[depth]) {
      res[depth] = [];
    }
  }
}

module.exports = levelOrder;
