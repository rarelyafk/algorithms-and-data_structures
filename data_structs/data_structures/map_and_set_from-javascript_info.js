#!/usr/bin/env node

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  const map = new Map();
  for (const str of arr) {
    const sorted = str.split('').sort().join('').toLowerCase();
    if (!(map.get(sorted)))
      map.set(sorted, str);
  }
  return Array.from(map.values());
}

const res = aclean(arr);
console.log(res);
