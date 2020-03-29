const getProductsOfAllIntsExceptAtIndex = require('../product-of-other-numbers.js');

test('short array', () => {
  const intArray = [2, 7, 6, 1];
  expect(getProductsOfAllIntsExceptAtIndex(intArray)).toEqual(
    [42, 12, 14, 84]
  );
});
