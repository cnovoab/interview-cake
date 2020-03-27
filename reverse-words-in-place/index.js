const reverseLetters = require('./reverse-letters');
const reverseWords = words => {
  reverseLetters(words);

  let startIndex = 0;
  for(let i = 0; i <= words.length; i++) {
    if (words[i] === ' ' || i === words.length) {
      reverseLetters(words, startIndex, i - 1);
      startIndex = i + 1;
    }
  }
};

module.exports = reverseWords;
