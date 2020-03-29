const getMaxProfit = stockPrices => {
  if (stockPrices.length < 2) throw new Error('Not enough data!');

  let minPrice = Math.min(stockPrices[1], stockPrices[0]);
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 2; i < stockPrices.length; i++) {
    const currentProfit = stockPrices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
  }

  return maxProfit;
}

module.exports = getMaxProfit;
