function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);
  dpMinCoins[0] = 0;
}

module.exports = coinChange;
