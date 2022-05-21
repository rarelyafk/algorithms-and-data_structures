#!/usr/bin/env node

class Node {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {

  constructor () {
    this.root = null;
  }

  add (val) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val);
      return;
    } else {
      const searchTree = (node) => {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new Node(val);
            return;
          } else
            return searchTree(node.left);
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new Node(val);
            return;
          } else
            return searchTree(node.right);
        } else
          return null;
      };
      return searchTree(node);
    }
  }

  findMinMax (dir) {
    let curr = this.root;
    while (curr[dir] !== null)
      curr = curr[dir];
    return curr.val;
  }

  findMin () {
    return this.findMinMax('left');
  }

  findMax () {
    return this.findMinMax('right');
  }

  find (val) {
    let curr = this.root;
    while (curr.val !== val) {
      if (val < curr.val)
        curr = curr.left
      else
        curr = curr.right;
      if (curr === null)
        return null;
    }
    return curr;
  }

  isPresent (val) {
    let curr = this.root;
    while (curr) {
      if (val === curr.val)
        return true;
      if (val < curr.val)
        curr = curr.left;
      if (val > curr.val)
        curr = curr.right;
    }
    return false;
  }

  remove (val) {
    const removeNode = (node, val) => {
      if (node === null)
        return null;
      if (val === node.val) {
        if ((node.left === null) && (node.right === null))
          return null;
        else if (node.left === null)
          return node.right;
        else if (node.right === null)
          return node.left;
        else {
          let tempNode = node.right;
          while (tempNode.left !== null)
            tempNode = tempNode.left;
          node.val = tempNode.val;
          node.right = removeNode(node.right, tempNode.val);
          return node;
        }
      } else if (val < node.val) {
      }
    };
    this.root = removeNode(this.root, val);
  }
  
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(bst.find(4));
// bst.isPresent(4);
// console.log(JSON.stringify(bst, null, 2));
// console.log(bst.findMin());
// console.log(bst.findMax());
