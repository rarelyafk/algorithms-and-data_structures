#!/usr/bin/env node

/**
 * Linked Lists
 * - singly-linked
 * - doubly-linked (prev in addition to next)
 * - circularly-linked (last node's next is first node's value,
 *                      first node's prev is last node's value)
 *
 * Where are Linked Lists used?
 * - many list, queue, and stack implementations
 * - great for creating circular lists
 * - can easily model real world objects (eg., trains)
 * - used in "separate chaining" - present in certain HashTable implementations
 *   - strategy for dealing with hashing collisions
 * - often used in the implementation of adjacency lists for graphs
 *
 * Terminology
 * - head: the first node in a linked list
 * - tail: the last node in a linked list
 * - pointer: reference to another node (also called references sometimes)
 * - node: an object containing data and pointer(s)
 *
 * Singly VS Doubly
 * singly-linked list node objects only point-to/reference the "next" node
 *   (or "null" in the case of the last node)
 *   head is the first node
 *   - head:
 *   - tail:
 *   - node:
 *     - data:
 *     - next:
 * double-linked list node objects contain
 *   - data:
 *   - next:
 *   - prev: 
 * Pros and Cons
 *                  pros                                    cons
 * singly       uses less memory          cannot easily access previous elements
 *              simpler implementation
 * doubly     can be traversed backwards            takes 2x memory
 *            (constant time)
 * 
 * Complexity Analysis
 *                 Singly  Doubly
 * search           O(n)    O(n)
 * insert (@head)   O(1)    O(1)
 * insert (@tail)   O(1)    O(1)
 * remove (@head)   O(1)    O(1)
 * remove (@tail)   O(n)    O(1)
 * remove (@body)   O(n)    O(n)
 *
 *
 *
 */

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  insertFirst (data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast (data) {
    let node = new Node(data);
    if (!(this.head))
      this.head = node;
    else {
      let curr = this.head;
      while (curr.next)
        curr = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  insertAtIndex (data, idx) {
    if ((idx > 0) && (idx > this.size))
      return null;
    if (idx === 0) {
      this.head = new Node(data, this.head);
      return null;
    }
    const node = new Node(data);
    let curr = this.head;
    let prev = this.head;
    let cnt = 0;
    while (cnt < idx) {
      prev = curr;
      cnt++;
      curr = curr.next;
    }
  }

  getAtIndex (idx) {
    let curr = this.head
    let cnt = 0;
    while (cnt !== idx) {
      curr = curr.next;
      cnt++;
    }
    return curr;
  }

  printListData () {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

}

const ll = new LinkedList();
ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(999);
ll.printListData();
console.log(`${JSON.stringify(ll.getAtIndex(3), null, 2)}`);
