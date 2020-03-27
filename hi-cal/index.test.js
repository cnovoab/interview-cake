const mergeRanges = require('./index.js');
describe('Base case', () => {
  const meetings = [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 11, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ];
  
  test('Takes a meetings range and return condensed ranges', () => {
    const overlapedMeetings = mergeRanges(meetings)
      .sort((a, b) => a.startTime - b.startTime);
    expect(overlapedMeetings).toEqual([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 10 },
      { startTime: 11, endTime: 12 },
    ]);
  });
});

describe('Edge case 1', () => {
  const meetings = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
  ];

  test('All overlaped', () => {
    const overlapedMeetings = mergeRanges(meetings)
      .sort((a, b) => a.startTime - b.startTime);
    expect(overlapedMeetings).toEqual([
      { startTime: 1, endTime: 10 }
    ]);
  });
});
