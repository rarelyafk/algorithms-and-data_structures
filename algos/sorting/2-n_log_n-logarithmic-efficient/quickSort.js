#!/usr/bin/env node

/*
 * divide & conquer technique
 * main funda - partitioning (array into subarrays)
 * secondary funda - pivot (relates to above)
 * pivot = element you want to find position for
 *
 * pointer i - keeps memory
 *             remember the last index that an element was placed in,
 *             that was less than the pivot
 * pointer j - scanner
 *             scan from left boundary to 1 before the right boundary
 * OR
 * pointer i - starts from LB, goes right
 * pointer j - starts from UB, goes left
 *             swaps along the way
 *             UNTIL pointer i > pointer j
 */
// just use arr[0] as initial pivot!
// or arr[length-1]
// or choose median of beg,mid,end

const getPivot = (arr) => {
  // pivot
  let pi = 0;
  let pv = arr[0];
  // less than 3 elements
  if (arr.length < 3)
    return [pi, pv];
  // indices - lower, median, upper
  const lI = 0;
  const mI = (Math.floor(arr.length / 2));
  const uI = (arr.length - 1);
  // values - lower, median, upper
  const lV = arr[lI];
  const mV = arr[mI];
  const uV = arr[uI];
  // choose median value of 3
  if (((mV >= lV) && (mV <= uV)) || ((mV >= uV) && (mV <= lV)))
    [pi, pv] = [mI, mV];
  else if (((lV >= mV) && (lV <= uV)) || ((lV >= uV) && (lV <= mV)))
    [pi, pv] = [lI, lV];
  else
    [pi, pv] = [uI, uV];
  // return pivot index & value
  return [pi, pv];
};

const swap = (a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

// i = index of smaller element
// j = loop variable
const quickSort = (arr) => {
  const [pi, pv] = getPivot(arr);
  console.log(`pv: ${pv} (arr[${pi}])`);
  let i = -1;
  for (let j = 0; j < arr.length; j++) {
    if (j === pi)
      continue;
    else {
      const v = arr[j];
      if (v > pv)
        continue;
      i++;
      if (i === pi)
        i++;
      swap(i, j);
    }
  }
  const [p] = arr.splice(pi, 1);
  console.log('i: ',i);
  arr.splice(i+1, 0, p);
  return arr;
};

const arr = [1,2,3];
console.log(arr);
const res = quickSort(arr);
console.log(res);


/*

const arr = [9,2,1,0,3];
const arr = [4,5,3,8,9,7];
const arr = [4,2,1,0,9,3,8,7,6,5];
const mid = (Math.floor(arr.length / 2));
  console.log(`mid: ${mid}`);
  console.log(`before: ${arr}`);

  const swap = (a, b) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  let pivot = arr[0];
  let j = (arr.length - 1);
  const sorted = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const iVal = arr[i];
    const jVal = arr[j];
    if ((iVal === pivot) || (jVal === pivot))
      continue;
    // console.log(`${i}: ${iVal}\t${j}: ${jVal}`);
    if ((iVal > pivot) || (jVal < pivot))
      swap(i, j);
    j--;
  }

  console.log(` after: ${arr}`);

  while (pi <= pj) {
    // value i
    const vi = arr[pi];
    // value j
    const vj = arr[pj];
    console.log(`pi: ${pi} [vi]: ${vi} pj: ${pj} vj: ${vj}`);
    console.log(vi, ' > ', pivot, '? ', vi > pivot);
    console.log(vj, ' < ', pivot, '? ', vj < pivot);
  }
*/
