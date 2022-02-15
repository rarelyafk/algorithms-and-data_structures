#!/usr/bin/env node

/* "sorting by selection"
 * HackerEarth.com
 * The Selection sort algorithm is based on the idea of finding the
 * minimum or maximum element in an unsorted array and then
 * putting it in its correct position in a sorted array.
 * from Harvard CS50:
  * for i from 0 to n-1
    * find smallest item (minimum) between i'th item and last item
    * swap smallest item with i'th item
 * GeeksForGeeks - Selection Sort
  * 1 - selection
  * 2 - swapping
  * 3 - counter shift
 */

const selectionSort = (arr) => {

  // pntIdx - pointer index
  // minIdx - minimum index
  // minVal - minimum value
  // comIdx - compare index
  // comVal - compare value

  const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  for (let pntIdx = 0; pntIdx < arr.length; pntIdx++) {
    let minIdx = pntIdx;
    let minVal = arr[pntIdx];
    for (let comIdx = (pntIdx + 1); comIdx < arr.length; comIdx++) {
      const comVal = arr[comIdx];
      if (comVal < minVal)
        [minVal, minIdx] = [comVal, comIdx];
    }
    swap(pntIdx, minIdx);
  }
 
  return arr;
};

const arr = [8,2,4,1,3];
console.log(arr);
const res = selectionSort(arr);
console.log(res);


/*
const arr = [4,3,0,7,1,9,2];

      if (cV < mV) {
        mV = cV;
        mI = cI;
      }
*/
