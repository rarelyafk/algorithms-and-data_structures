#!/usr/bin/env node

/*
The algorithm is defined as follows:
1. If the value at the start is larger than the value at the end, swap them.
2. If there are 3 or more elements in the list, then:
  a. Stooge sort the initial 2/3 of the list
  b. Stooge sort the final 2/3 of the list
  c. Stooge sort the initial 2/3 of the list again
*/

const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

const stoogeSort = (arr, fi = 0, li = (arr.length - 1)) => {
  const fv = arr[fi];
  const lv = arr[li];
  if (fv > lv)
    swap(fi, li);
  const len = (li - fi + 1);
  if (len > 2) {
    const t = (parseInt((len / 3), 10));
    stoogeSort(arr, fi, (li - t));
    stoogeSort(arr, (fi + t), li);
    stoogeSort(arr, fi, (li - t));
  }
  return arr;
};

const arr = [
  98, 57, 22, 87, 35,  0,  1,  0, 93, 33, 49, 46,
   6, 53,  3, 91, 72, 82, 52,  2, 56, 98, 10, 85,
  38, 11, 92,  9, 75, 41, 26, 60, 53,  2, 39, 17,
  61,  9, 31, 27, 63, 73, 13, 26,  8,  1, 52, 90,
  11, 63, 91, 70, 90, 96, 14, 14, 95, 19, 78, 75,
  94, 14, 24, 39, 38, 21, 92, 88,  5, 88,  4, 79,
  71, 44, 49, 47, 99, 59, 28, 69, 89, 50,  3, 87,
  30, 99, 25, 86, 95, 17, 73, 74, 98, 47, 52, 41,
  72, 84, 77,  9
];
console.log(arr);
const res = stoogeSort(arr);
console.log(res);

/*
const arr = [4,2,1,0,9,3,8,7,6,5];
const arr = [7,4,0,6,1,8,5,2,3,9];
  console.log(`fi: ${fi} fv: ${fv}\tli: ${li} lv: ${lv}`);
  console.log(arr);
    const j = (Math.round((2 / 3) * arr.length));
    const itt = arr.slice().slice(0, j);
    const ftt = arr.slice().slice(j);
    stoogeSort(itt)
*/
