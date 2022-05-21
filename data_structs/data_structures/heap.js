#!/usr/bin/env node

/*
DEFINITION
A Heap is a TREE-based Data Structure (DS) that satisfies the
heap-invariant/heap-property:
 - if A is a parent node of B
   - then A is ordered with respect to B for all nodes A, B in the heap

Binary Heaps
- every parent node, can have max 2 children
- must be a "complete" tree (filled l->r and every lvl except last must be full)
- min-heap: every parent's key must be smaller than it's child nodes
- max-heap: every parent's key must be larger than it's child nodes

                  MAX Heap           MIN Heap
                      8 - root of tree - 0
                    /   \              /   \
                   7     6            2     3
                  / \    |           / \   / \
                 3   2   5          4  5  6   4

Binomial Heaps
Fibonacci Heaps
Pairing Heaps
...

*/

class MinHeap {

  constructor () {
    this.storage = [];
    this.size = 0;
  }

  getParentIndex = (i) => (Math.floor((i - 1) / 2));
  getLeftChildIndex = (i) => ((2 * i) + 1);
  getRightChildIndex = (i) => ((2 * i) + 2);
  hasParent = (i) => (this.getParentIndex(i) >= 0);
  hasLeftChild = (i) => (this.getLeftChildIndex(i) < this.size);
  hasRightChild = (i) => (this.getRightChildex(i) < this.size);

  swap = (i1, i2) => (
    [this.storage[i1], this.storage[i2]] = [this.storage[i2], this.storage[i1]]
  );


  // recursive (iterative in comments)
  heapifyUp = (i) => {
    if (this.hasParent(i) && (this.storage[this.getParentIndex(i)] > this.storage[i])) {
      this.swap(this.getParentIndex(i), i);
      this.heapifyUp(this.getParentIndex(i));
    }
  };

  insert = (data) => {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUp((this.size - 1));
  };

  // iterative
  heapifyDown = () => {
    let i = 0;
    while (this.hasLeftChild(i)) {
      let smallerChildIndex = this.getLeftChildIndex(i);
      if (this.hasRightChild(i) && (this.rightChild(i) < this.leftChild(i)))
        smallerChildIndex = this.getRightChildIndex(i);
      if (this.storage[index] < this.storage[smallerChildIndex])
        break;
      else
        this.swap(i, smallerChildIndex);
      i = smallerChildIndex;
    }
  };

  removeMin = () => {
    if (this.size === 0)
      throw new Error('Empty Heap');
    let data = this.storage[0];
    this.storage[0] = this.storage[(this.size - 1)];
    this.size--;
    this.heapifyDown();
    return data;
  };

}

const mh = new MinHeap();
mh.insert(3);
console.log(mh);
mh.insert(5);
console.log(mh);
mh.insert(7);
console.log(mh);
mh.insert(2);
console.log(mh);
//console.log('parent i of 2 @ i 0', mh.getParentIndex(0));
console.log('leftchild of 2 @ idx 0', mh.storage[mh.getLeftChildIndex(0)]); 
console.log('rightchild of 2 @ idx 0', mh.storage[mh.getRightChildIndex(0)]); 
const valAt1 = mh.storage[1];
const leftChildOf1 = mh.getLeftChildIndex(1);
const rightChildOf1 = mh.getRightChildIndex(1);
const valAt2 = mh.storage[2];
const leftChildOf2 = mh.getLeftChildIndex(2);
const rightChildOf2 = mh.getRightChildIndex(2);
console.log(`leftchild of ${valAt1}: ${leftChildOf1}`);
console.log(`rightchild of ${valAt1}: ${rightChildOf1}`);
console.log(`leftchild of ${valAt2}: ${leftChildOf2}`);
console.log(`rightchild of ${valAt2}: ${rightChildOf2}`);


/*
  // heapifyUp - iterative
  heapifyUp = () => {
    let i = (this.size - 1);
    while (this.hasParent(i) && (this.storage[this.getParentIndex(i)] > this.storage[i])) {
      this.swap(this.getParentIndex(i), i);
      i = this.getParentIndex(i);
    }
  };
*/
