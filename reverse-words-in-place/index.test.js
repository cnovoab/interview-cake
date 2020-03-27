const reverseWords = require('./index.js');

test('Reverse array of words', () => {
  const message = [ 'c', 'a', 'k', 'e', ' ',
                    'p', 'o', 'u', 'n', 'd', ' ',
                    's', 't', 'e', 'a', 'l' ];

  reverseWords(message);
  expect(message).toEqual([ 
    's', 't', 'e', 'a', 'l', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    'c', 'a', 'k', 'e'
  ]);
});
