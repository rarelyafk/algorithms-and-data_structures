#!/usr/bin/env node

/**
 * Stack
 * A stack is a 1-ended linear data structure which models a real-world
 * stack by having 2 primary operations: push and pop
 *
 * LIFO (last-in first-out)
 * top  - pointer always points to top of stack
 * push - push to top
 * pop  - pop off top
 *
 */

class Stack {
  constructor (length = 0) {
    this.length = length;
    this.top = -1;
  }

  peek () { return this[this.top]; }

  push (item) {
    this[this.length] = item;
    this.length++;
    this.top++;
    return item;
  }

  pop () {
    const topOStack = this.peek();
    if (topOStack) {
      delete this[this.top];
      this.length--;
      this.top--;
    }
    return topOStack;
  }

}

const stack = new Stack();
console.log(stack);
console.log(stack.push(1));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

/*
const stack = new Stack();
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(2);
console.log('top: ', stack.top);
stack.pop();
console.log(stack);
stack.push(3);
console.log(stack);
console.log('top: ', stack.top);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack);
*/
