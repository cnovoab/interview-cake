const mergeRanges = ranges => {
  if (ranges.length < 1) throw Error('Ranges can\'t be empty');
  const visited = [];
  const newRanges = [];

  for (let i = 0; i < ranges.length; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    const current = ranges[i];

    for (let j = i + 1; j < ranges.length; j++) {
      if (visited.includes(j)) continue;
      if (current.endTime >= ranges[j].startTime &&
          current.startTime <= ranges[j].endTime) {
        current.startTime = Math.min(current.startTime, ranges[j].startTime);
        current.endTime = Math.max(current.endTime, ranges[j].endTime);
        visited.push(j);
      }
    }
    newRanges.push(current);
  } 
  return newRanges;
};

module.exports = mergeRanges;
