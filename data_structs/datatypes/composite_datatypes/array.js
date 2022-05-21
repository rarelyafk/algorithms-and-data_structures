#!/usr/bin/env node

/**
 * Static Array
 * fixed-length container containing n elements, indexable
 * zero-based indexing
 * last element is at index (array.length - 1)
 * range = 0 to (n - 1)
 *   uses:
 *     1) storing and accessing sequential data
 *     2) temporarily storing objects
 *     3) used by IO routines as buffers
 *     4) lookup tables and inverse lookup tables
 *     5) can be used to return multiple values from a function
 *     6) used in dynamic programming to cache answers to subproblems
 *
 * Dynamic Array
 * can grow and shring as needed
 *
 * dynamic arrays can be implemented using a static array
 * 1) create a static array with an initial capacity
 * 2) add elements to the underlying static array,
 *    keeping track of the number of elements (size/length of array)
 * 3) if adding another element will exceed the capacity,
 *    then create a new static array with twice (2x) the capacity
 *    and copy the original elements into it
 *
 * array Methods
 * add(elem)?
 * remove(i)?
 *
 * Time Complexity Analysis
 *         static  dynamic
 * access   O(1)    O(1)
 * search   O(n)    O(n)
 * insert   N/A     O(n)
 * append   N/A     O(1)
 * delete   N/A     O(n)
 *
 *
 */
