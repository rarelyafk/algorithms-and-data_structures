#!/usr/bin/env node

class Queue {

  constructor () {
    this.head = null;
    this.tail = null;
  }

  enqueue (data) {
    const node = {
      data, 
      next: null,
    };
    this.tail = (this.head)
      ? (this.tail.next = node)
      : (this.head = node);
  }
  dequeue () {
    if (this.head) {
      const data = this.head.data;
      this.head = this.head.next;
      return data;
    }
  }

  peek () { return this.head?.data }
}

const q = new Queue ();
//console.log('peek', q.peek());
//console.log('q', q);
q.enqueue(1);
//console.log('peek', q.peek());
//console.log('q', q);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(1);
q.dequeue();
q.dequeue();
console.log('peek', q.peek());
console.log(JSON.stringify(q, null, 2));

