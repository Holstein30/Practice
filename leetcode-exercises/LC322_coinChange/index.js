function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);
  dpMinCoins[0] = 0;

  for (let i = 1; i < dpMinCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j];
      if (coinValue <= i) {
        dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
      }
    }
  }
}

module.exports = coinChange;
