const rand7 = () => Math.floor(Math.random() * 7) + 1;
const rand5 = () => {
  const result = rand7();
  if (result > 5) {
    return rand5();
  }
  return result;
};

module.exports = rand5;
