#!/usr/bin/env node

// it's just a worse insertion sort
/*
 * He looks at the flower pot next to him and the previous one;
 * if they are in the right order he steps one pot forward,
 * otherwise he swaps them and steps one pot backwards.
 * If there is no previous pot (he is at the starting of the pot line), he steps forwards;
 * if there is no pot next to him (he is at the end of the pot line), he is done.
 *
 */

const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

const gnomeSort = (arr) => {
  let end = (arr.length - 1);
  let i = 0;
  // i === end (end of pot line)
  while (i <= end) {
    const h = (i - 1);
    const prev = arr[h];
    const curr = arr[i];
    // at starting pot line (arr[0]):
    // ( n < undefined) => false => i++
    if (curr < prev) {
      swap (h,i);
      i--;
      continue;
    }
    i++;
  }
  return arr;
};

const arr = [4,5,7,8,1,2,0,9,3,6];
console.log(arr);
const res = gnomeSort(arr);
console.log(res);
