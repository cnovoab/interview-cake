const getMaxProfit = require('../apple-stock-price.js');

test('Maximize profit', () => {
  const stockPrices = [10, 7, 5, 8, 11, 9];
  expect(getMaxProfit(stockPrices)).toBe(6);
});

test('Goes down all day', () => {
  const stockPrices = [10, 7, 5, 4, 3, 1];
  expect(getMaxProfit(stockPrices)).toBe(-1);
});

test('Goes down then up', () => {
  const stockPrices = [7, 2, 8, 9];
  expect(getMaxProfit(stockPrices)).toBe(7);
});

test('Goes down then up then down and up again', () => {
  const stockPrices = [20, 6, 3, 14, 13, 21];
  expect(getMaxProfit(stockPrices)).toBe(18);
});
