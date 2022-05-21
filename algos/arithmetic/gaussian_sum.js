#!/usr/bin/env node

/* Takes a min and max *natural* number to generate
 * an (inclusive) range from.
 * Returns an array of that range.
 *
 * @param {number} min
 * @param {number} max
 * @returns {array} range
 */
const genRange = (min, max) => {
  const range = [];
  let cur = min;
  while (cur <= max) {
    range.push(cur);
    cur++;
  }
  return range;
};

/* Takes a range (array) of ordered natural numbers (inclusive).
 * Naively loops through the range, adding each num,
 * 1 at a time, to a sum var.
 * Returns the sum.
 * 
 * @param {number[]} range
 * @returns {number} sum
 */
const naiveSum = range => {
  let sum = 0;
  for (const num of range)
    sum += num;
  return sum;
};

/* Takes a range (array) of ordered natural numbers (inclusive).
 * Calculate's the Gaussian sum of the (exclusive) range,
 * then adds the min and max (to make it inclusive).
 * Returns the sum.
 *
 */
const gaussSum = range => {
  const min = Math.min(...range);
  const max = Math.max(...range);
  return (
    ((((max - (min + 1)) * (max + min)) / 2) + min + max)
  );
};

// TESTS //////////////////////////////////////////////////////////////////////
console.log('-=[ TESTS ]=-');

const tests = nums => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  console.log();
  console.log(`calculating sum of natural numbers ranging from ${min} to ${max}`);
  console.time('naiveSum');
  console.log(`naiveSum: ${naiveSum(nums)}`);
  console.timeEnd('naiveSum');
  console.time('gaussSum');
  console.log(`gaussSum: ${gaussSum(nums)}`);
  console.timeEnd('gaussSum');
};

tests(genRange(2, 4));
tests(genRange(1, 10));
tests(genRange(1, 500));
tests(genRange(1, 99999));
