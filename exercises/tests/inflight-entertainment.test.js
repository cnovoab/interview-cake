const canTwoMoviesFillFlight = require('../inflight-entertainment.js');

describe('Check if two movies sums exactly the flight length', () => {
  test('short flight', () => {
    const flightLength = 1;
    const movieLengths = [2, 1];
    const twoMovies = canTwoMoviesFillFlight(movieLengths, flightLength);
    expect(twoMovies).toBe(false);
  });
  
  test('long enough flight', () => {
    const flightLength = 7;
    const movieLengths = [4, 3, 5];
    const twoMovies = canTwoMoviesFillFlight(movieLengths, flightLength);
    expect(twoMovies).toBe(true);
  });
  
  test('not long enough flight', () => {
    const flightLength = 8;
    const movieLengths = [3, 6];
    const twoMovies = canTwoMoviesFillFlight(movieLengths, flightLength);
    expect(twoMovies).toBe(false);
  });
  
  test('very long flight', () => {
    const flightLength = 12;
    const movieLengths = [5, 3, 7, 6];
    const twoMovies = canTwoMoviesFillFlight(movieLengths, flightLength);
    expect(twoMovies).toBe(true);
  });
});
