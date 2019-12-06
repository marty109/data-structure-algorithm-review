class MinCoinChange {
  constructor(coins) {
    this.coins = coins
    this.cache = {}
  }

  // TODO
  makeChange(amount) {
    if (!amount) return []
    if (this.cache[amount]) return this.cache[amount]
    let min = [], newMin, newAmount
    this.coins.forEach(coin => {
      newAmount = amount - coin
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount)
      }
    })
  }
}