class WordCloudData {}

const buildWordCloud = inputText => {
  const words = inputText.toString().toLowerCase().split(' ');
  const wordsMap = new Map();

  for (let word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  return wordsMap;
}

module.exports = WordCloudData;
