const reverseLetters = (letters, start = 0, end = letters.length - 1) => {
  for (let i = 0; i <= Math.floor((end - start)/2); i++) {
    const current = letters[start + i];
    letters[start + i] = letters[end - i];
    letters[end - i] = current;
  }
};

module.exports = reverseLetters;

