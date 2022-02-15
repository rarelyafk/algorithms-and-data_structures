#!/usr/bin/env node

/* "sorting by insertion"
 * HackerEarth.com
 * Insertion sort is based on the idea that one element from the input elements
 * is consumed in each iteration to find its correct position 
 * i.e, the position to which it belongs in a sorted array.
 * YouTube - insert-sort with romanian folk dance
 * pseudo-code:
 * keeps track of 3 pointers: marker, pointer1, pointer2
   * mrkrIdx starts from 1 and goes to end of array
     * pnt1idx starts from current mrkrIdx and goes backwards to start of array
     * pnt0idx is directly previous to pnt1idx
     * if (pnt1val is less than pnt0val) swap
     * else done with that marker
 */

const insertionSort = (arr) => {

  //   mrkrIdx = marker index
  //   pnt1idx = pointer1 index
  //   pnt1val = pointer1 value
  //   pnt0idx = pointer0 index
  //   pnt0val = pointer0 value

  const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  for (let mrkrIdx = 1; mrkrIdx < arr.length; mrkrIdx++) {
    for (let pnt1idx = mrkrIdx; pnt1idx >= 0; pnt1idx--) {
      const pnt1val = arr[pnt1idx];
      const pnt0idx = (pnt1idx - 1);
      const pnt0val = arr[pnt0idx];
      if (pnt1val < pnt0val)
        swap(pnt0idx, pnt1idx);
      else
        break;
    }
  }

  return arr;
};

const arr = [8,2,4,1,3];
console.log(`before: ${arr}`);
const res = insertionSort(arr);
console.log(` after: ${res}`)

/*

  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

console.log('i',i,'curr',curr,'j',j,'comp',comp);
const swap = (i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
      console.log(arr);
      console.log(comp, ' > ', curr, comp > curr);
      if (comp > curr) {
        swap(i, j);
        console.log(arr);
        console.log('-----------------');
      } else
        break;
 
*/

// 8 2 4 1 3
// 2 > 8 false
// 2 8 4 1 3
// 4 > 8 false
// 2 4 8 1 3
// 4 > 2 true
// 2 4 8 1 3
// 1 > 8 false
// 2 4 1 8 3
// 1 > 4 false
// 2 1 4 8 3
// 1 > 2 false
// 1 2 4 8 3
// 3 > 8 false
// 1 2 4 3 8
// 3 > 4 false
// 1 2 3 4 8
// 3 > 2 true
