const mergeArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while(i < Math.max(arr1.length, arr2.length)) {
    if (!isNaN(parseInt(arr1[i])) && (arr1[i] < arr2[j] || arr2[j] === undefined)) {
      mergedArray.push(arr1[i]);
      i++;
    } 
    if (!isNaN(parseInt(arr2[j])) && (arr1[i] > arr2[j] || arr1[i] === undefined)) {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}

module.exports = mergeArrays
