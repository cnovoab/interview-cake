const highestProductOfThree = require('../highest-product-of-three.js');
test.skip('Highest product of three', () => {
  const arrayOfInts = [14, 2, 7, 6, 8, 5];
  expect(highestProductOfThree(arrayOfInts)).toBe(784); // 14 * 8 * 7
});
