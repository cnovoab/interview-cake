const canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  const temp = {};
  for (movieLength of movieLengths) {
    const lookupLength = flightLength - movieLength;
    if (temp.hasOwnProperty(lookupLength)) {
      return true;
    }
    temp[movieLength] = 1;
  }
  return false;
}

module.exports = canTwoMoviesFillFlight;
