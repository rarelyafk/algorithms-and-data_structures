#!/usr/bin/env node

/*

a Priority Queue (PQ) !== a Heap (some people think PQ=Heap - NOT TRUE)

DEFINITION
a Priority Queue (PQ) is an Abstract Data Type (ADT) that operates
similar to a normal queue EXCEPT that each element has a certain PRIORITY.

The PRIORITY of the elements in the priority queue determine the ORDER in
which elements are removed from the PQ.

note: PQ's only support COMPARABLE DATA, meaning the data inserted
into the PQ must be sortable (ascending/descending, greatest/least)
(in order to assign RELATIVE priorities to each element)


METHODS
poll()
 - remove item with the HIGHEST priority
add()
 -ne 

Priority-Queue Abstract-Data-Type's (PQ ADT) are usually implemented by Heap Data-Types

When and Where are PQ's used?
- used in certain implementations of Dijkstra's Shortest Path Algo
- anytime you need to dynamically fetch the "next best" or "next worst" element
- used in Huffman coding (often used in lossless data compression)
- Best First Search (BFS) algo's such as A* use PQ's to continuously grab
  the next most promising node
- used by Minimum Spanning Tree (MST) algo's

Complexity (Priority Queue by Binary Heap)
binary heap construction    O(n)
polling                     O(log(n))
peeking                     O(1)
adding                      O(log(n))



*/

class PriorityQueue {
  constructor () {
    this.collection = [];
    this.enqueue = (payload) => {
      const [item, priority] = payload;
      if (this.isEmpty())
        this.collection.push(payload);
      else {
        let topPriority = true;
        for (let i = 0; i < this.collection.length; i++) {
          const [curItem, curPriority] = this.collection[i];
          if (priority < curPriority) {
            this.collection.splice(i,0,payload);
            topPriority = false;
            break;
          }
        }
        if (topPriority)
          this.collection.push(payload);
      }
    };
    this.dequeue = () => {
      const [item, priority] = this.collection.shift();
      return item;
    };
    this.front = () => this.collection[0];
    this.size = () => this.collection.length;
    this.isEmpty = () => (this.collection.length === 0);
  }
};

/*
const pq = new PriorityQueue();
pq.enqueue(['c',3]);
console.log(pq.collection);
pq.enqueue(['b',2]);
console.log(pq.collection);
pq.enqueue(['a',1]);
console.log(pq.collection);
pq.enqueue(['b2',2]);
console.log(pq.collection);
console.log(pq.dequeue());
console.log(pq.collection);
*/
