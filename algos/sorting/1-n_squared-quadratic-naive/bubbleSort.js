#!/usr/bin/env node

/*
 * "sorting by exchange"
 * HackerEarth.com
 * Bubble sort is based on the idea of repeatedly comparing pairs of
 * adjacent elements and then swapping their positions
 * if they exist in the wrong order.
 * comparison sort
 * the max values "bubble" up to the end of the list
 * YouTube - bubble-sort with Hungarian Folk Dance
 * bubble sort is quite efficient with ordered/nearly-ordered array
*/

const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

const bubbleSort = (arr) => {
  // sCnt = counts number of sorted elements
  let sCnt = 0;
  let end = (arr.length - 1);
  // sCnt === (arr.length - 1) means all elements are sorted
  while (sCnt < end) {
    sCnt = 0;
    for (let i = 0; i < arr.length; i++) {
      const j = (i + 1);
      const curr = arr[i];
      const next = arr[j];
      if (next < curr)
        swap(i, j);
      else
        sCnt++;
    }
  }

  return arr;
};

const arr = [4,5,7,8,1,2,0,9,3,6];
console.log(arr);
const res = bubbleSort(arr);
console.log(res);


/*
  
const arr = [4,5,7,8,1,2,0,9,3,6];
const arr = [8,2,4,1,3];
const arr = [2,1,3];
  
    arr.forEach((curr, i) => {
      const j = (i + 1);
      const next = arr[j];
      if (next < curr)
        swap(i, j);
      else
        sCnt++;
      end--;
      console.log(`sCnt: ${sCnt} end: ${end}`);
    });
  const swap = (i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };
*/
