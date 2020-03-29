const getProductsOfAllIntsExceptAtIndex = intArray => {
  if (intArray.length < 2) throw new Error('At least 2 elements needed!');

  const products = new Array();
  let accum = 1;
  
  for (let i = 0; i < intArray.length; i++) {
    products[i] = accum;
    accum *= intArray[i];
  }
  
  accum = 1;
  for (let i = intArray.length - 1; i >= 0; i--) {
    products[i] *= accum;
    accum *= intArray[i];
  }

  return products;
}

module.exports = getProductsOfAllIntsExceptAtIndex;
