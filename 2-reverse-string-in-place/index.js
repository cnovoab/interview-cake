const reverseLetters = letters => {
  const last = letters.length - 1;
  for (let i = 0; i <= Math.floor(last / 2); i++) {
    const current = letters[i];
    letters[i] = letters[last - i];
    letters[last - i] = current;
  }
  return letters;
};

module.exports = reverseLetters;
