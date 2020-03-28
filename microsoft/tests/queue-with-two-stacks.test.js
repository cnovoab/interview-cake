const Queue = require('../queue-with-two-stacks.js');
let queue;

beforeEach(() => {
  queue = new Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
});

test('Dequeue a', () => {
  expect(queue.dequeue()).toBe('a');
});

test('Dequeue b', () => {
  expect(queue.dequeue()).toBe('a');
  expect(queue.dequeue()).toBe('b');
});

test('Dequeue c', () => {
  expect(queue.dequeue()).toBe('a');
  expect(queue.dequeue()).toBe('b');
  queue.enqueue('d');
  expect(queue.dequeue()).toBe('c');
  expect(queue.dequeue()).toBe('d');
});
