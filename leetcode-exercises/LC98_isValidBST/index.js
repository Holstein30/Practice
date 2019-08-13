function isValidBST(root) {
  let validity = true;

  function helper(node, min, max) {
    if (!node) return;

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      validity = false;
      return;
    }
  }
}

module.exports = isValidBST;
