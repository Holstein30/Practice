function canJump(nums) {
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;
}

module.exports = canJump;
