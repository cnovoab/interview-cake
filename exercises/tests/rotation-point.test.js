const findRotationPoint = require('../rotation-point.js');

test('Right in the middle', () => {
  const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here! (index: 5)
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

  expect(findRotationPoint(words)).toBe(5);
});


test('In first half', () => {
  const words = [
    'retrograde',
    'zero',
    'animalist',  // <-- rotates here! (index: 2)
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

  expect(findRotationPoint(words)).toBe(2);
});

test('In second half', () => {
  const words = [
    'hitman',
    'mothership',
    'optane',
    'poacher',
    'retrograde',
    'zero',
    'animalist',  // <-- rotates here! (index: 6)
    'barrel',
    'denounce'
  ];

  expect(findRotationPoint(words)).toBe(6);
});

test('Non-rotated array', () => {
  const words = [
    'animalist',
    'barrel',
    'denounce',
    'hitman',
    'mothership',
    'optane',
    'poacher',
    'retrograde',
    'zero',
  ];

  expect(findRotationPoint(words)).toBe(0);
});
