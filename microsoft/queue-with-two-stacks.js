class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue () {
    if (this.stack2.length === 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
      if (this.stack2.length === 0) {
        throw new Error('Empty queue!');
      }
    }
    return this.stack2.pop();
  }
}

module.exports = Queue;
