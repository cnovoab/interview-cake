const mergeArrays = require('./index.js');

test('Merge arrays sorted', () => {
  const myArray = [3, 4, 6, 10, 11, 15];
  const alicesArray = [1, 5, 8, 12, 14, 19];
  const mergedArray = mergeArrays(myArray, alicesArray);

  expect(mergedArray).toEqual(
    [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
  );
});

describe('Merge different size arrays', () => {
  test('a longer than b', () => {
    const myArray = [1, 5, 8, 12, 14, 19, 55];
    const alicesArray = [13, 56];
    const mergedArray = mergeArrays(myArray, alicesArray);

    expect(mergedArray).toEqual(
      [1, 5, 8, 12, 13, 14, 19, 55, 56]
    );
  });
});
