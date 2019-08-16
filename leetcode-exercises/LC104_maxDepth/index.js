function maxDepth(root) {
  let maxDepth = 0;

  function dive(node, currentDepth) {
    if (!node) {
      maxDepth = Math.max(currentDepth - 1, maxDepth);
    }
  }
}

module.exports = maxDepth;
