#!/usr/bin/env node

const random = (max) => (Math.floor(Math.random() * (max + 1)));
const swap = (a, b) => ([arr[a], arr[b]] = [arr[b],arr[a]]);

const isSorted = (arr) => {
  let isSorted = true;
  for (const i in arr) {
    const curr = arr[i];
    const prev = arr[(i - 1)];
    if (prev > curr) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
};

const shuffle = (arr) => {
  let i = arr.length;
  while (i--) {
    const j = random((arr.length - 1));
    swap(i, j);
  }
};

const bogoSort = (arr) => {
  while (!(isSorted(arr))) {
    shuffle(arr);
  }
  return arr;
};

const arr = [ 98, 57, 22, 87, 35,  0,  1,  0, 77, 21, 33 ];
console.log(arr);
const res = bogoSort(arr);
console.log(res);

/*
const arr = [4,2,1,0,9,3,8,7,6,5];
const arr = [7,4,0,6,1,8,5,2,3,9];
*/
