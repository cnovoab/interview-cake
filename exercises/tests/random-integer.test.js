const rand5 = require('../random-integer.js');

test('Generates a random integer between 1 and 5', () => {
  const num = rand5();
  expect(num).toBeGreaterThanOrEqual(1);
  expect(num).toBeLessThanOrEqual(5);
});
