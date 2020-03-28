const reverseLetters = require('./reverse-letters.js');

test('Reverse even array of characters', () => {
  const sampleInput = ['b', 'l', 'o', 'c', 'k', 'c', 'h', 'a', 'i', 'n'];
  reverseLetters(sampleInput)
  expect(sampleInput).toEqual(
    ['n', 'i', 'a', 'h', 'c', 'k', 'c', 'o', 'l', 'b']
  );
});

test('Reverse odd array of characters', () => {
  const sampleInput = ['w', 'i', 'n', 'g', 's'];
  reverseLetters(sampleInput);
  expect(sampleInput).toEqual(
    ['s', 'g', 'n', 'i', 'w']
  );
});
