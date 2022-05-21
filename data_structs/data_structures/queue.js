#!/usr/bin/env node

/**
 * Queue
 * A queue is a linear data structure which models real-world queues.
 * It has 2 primary operations: enqueue & dequeue
 *
 * enqueue (or offering, or adding)
 * dequeue (or  polling, or removing)
 *
 * FIFO (first-in first-out)
 * keeps track of most recent/order
 * useful for recents-lists, server requests
 * BFS (breadth-first-search) graph traversal
 *
 * Complexity
 * enqueue  O(1)
 * dequeue  O(1)
 * peeking  O(1)
 * isEmpty  O(1)
 * removal  O(n)
 * contains O(n)
 *
 * use a LinkedList in JS to implement
 *
 */

class Queue {
  constructor (length = 0) {
    this.length = length;
    this.front = 0;
    this.back = -1;
  }

  peek () { return this[this.front]; }

//* 0
//* A
//* 0 1
//* B A
//* 0 1 2
//* C B A
// this.front = 0; this.back = 0; arr[0] = B; arr[1] = A;
// arr[0] = C; arr[1] = B; arr[2] = A;
 
  enqueue (item) {
    if (this.back === -1)
      this[this.front] = item; // arr[0] = A;
    else {
      this.back++;

    }
    this.back++;
    return this[this.front];
  }
};


/*
class Queue {
  contructor () {
    // data
    this.collection = [];
    // methods
    this.enqueue = (item) => (this.collection.push(item));
    this.dequeue = () => (this.collection.shift());
    this.front = () => this.collection[0];
    this.size = () => this.collection.length;
    this.isEmpty = () => (this.collection.length === 0);
  }
};
*/
