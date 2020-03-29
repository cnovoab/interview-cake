const findRotationPoint = words => {
  let lowerLimit = 0;
  let upperLimit = words.length;

  while (lowerLimit < upperLimit) {
    const middleIndex = Math.floor((upperLimit + lowerLimit)/2);
    if (
      (words[middleIndex] < words[middleIndex - 1] ||
          words[middleIndex - 1] === undefined) &&
      (words[middleIndex] < words[middleIndex + 1] ||
          words[middleIndex + 1] === undefined) 
    ) {
      return middleIndex;
    }
    if (middleIndex === lowerLimit || middleIndex === upperLimit) return 0;
    if (words[middleIndex] > words[middleIndex - 1] &&
        words[middleIndex] < words[upperLimit - 1]) {
      upperLimit = middleIndex;
    } else {
      lowerLimit = middleIndex;
    }
  }
  return false;
}

module.exports = findRotationPoint;
