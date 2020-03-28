const hasPalindromePermutation = require('../permutation-palindrome.js');

test('no palindrome permutation', () => {
  const text = 'hello';
  expect(hasPalindromePermutation(text)).toBe(false);
});

test('palindrome permutation', () => {
  const text = 'ivicc';
  expect(hasPalindromePermutation(text)).toBe(true);
});

test('straightforward palindrome', () => {
  const text = 'civic';
  expect(hasPalindromePermutation(text)).toBe(true);
});
