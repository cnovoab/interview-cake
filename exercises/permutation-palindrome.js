const hasPalindromePermutation = input => {
  const dict = {};
  for(let i = 0; i < input.length; i++) {
    dict[input.charAt(i)] = (dict[input.charAt(i)] || 0) + 1;
  }
  let even = 0;
  for(key in dict) {
    if (dict[key]% 2 === 0) even++;
  }
  return even >= Object.keys(dict).length - 1;
}

module.exports = hasPalindromePermutation;
