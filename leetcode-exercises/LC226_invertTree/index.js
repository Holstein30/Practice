function invertTree(root) {
  function helper(node) {
    if (!node) return;

    node.left = node.right;
    node.right = node.left;
  }
}

module.exports = invertTree;
