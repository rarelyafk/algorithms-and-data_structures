#!/usr/bin/env node

/* HackerEarth.com
 * Merge sort is a divide-and-conquer algorithm based on the idea of breaking
 * down a list into several sub-lists until each sublist consists of a single
 * element and merging those sublists in a manner that results into a sorted list.
 */

const merge = (lArr, rArr) => {
  const arr = [];
  while ((lArr.length) && (rArr.length)) {
    const [lVal, rVal] = [lArr[0], rArr[0]];
    (lVal < rVal)
      ? (arr.push(lArr.shift()))
      : (arr.push(rArr.shift()));
  }
  return arr.concat(lArr, rArr);
};

const mergeSort = (arr) => {
  if (arr.length <= 1)
    return arr;
  const m = (Math.floor(arr.length / 2));
  const [l, r] = [arr.slice(0, m), arr.slice(m)];
  return merge(mergeSort(l), mergeSort(r));
};

const arr = [7,4,0,6,1,8,5,2,3,9];
console.log(arr);
const res = mergeSort(arr);
console.log(res);


/*
const arr = [8,2,4,1,3];
    // if (lVal < rVal)
    //   arr.push(lArr.shift());
    // else
    //   arr.push(rArr.shift());
    // const lVal = lArr[0];
    // const rVal = rArr[0];
  // const m = (parseInt((arr.length / 2), 10));
  // const l = arr.slice(0, m);
  // const r = arr.slice(m);
*/
