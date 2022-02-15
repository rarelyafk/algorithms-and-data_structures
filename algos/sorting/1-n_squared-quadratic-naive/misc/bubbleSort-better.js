#!/usr/bin/env node

/*
 * HackerEarth.com
 * Bubble sort is based on the idea of repeatedly comparing pairs of
 * adjacent elements and then swapping their positions
 * if they exist in the wrong order.
 * YouTube - bubble-sort with Hungarian Folk Dance
 * better bubbleSort (decrease end each iteration, since we know
 *   the largest values bubble up to the end on each iteration)
*/

const bubbleSort = (arr) => {

  const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  // sCnt = counts number of sorted elements
  // end = last index in array
  let end = (arr.length - 1);
  let sCnt = 0;

  // sCnt === end means all elements are sorted
  while (sCnt !== end) {
    sCnt = 0;
    for (let i = 0; i < end; i++) {
      const j = (i + 1);
      const curr = arr[i];
      const next = arr[j];
      if (next < curr)
        swap(i, j);
      else
        sCnt++;
    }
    // BETTER - since we always know the last element is sorted
    //          (the one that "bubbles up")
    end--;
  }

  return arr;
};

const arr = [4,5,7,8,1,2,0,9,3,6];
console.log(arr);
const res = bubbleSort(arr);
console.log(res);


/*
// bubbleSort([2,1,3]);
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
