#!/usr/bin/env node

function hashFunc (key, size) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++)
    hashedKey = key.charCodeAt(i);
  return (hashedKey % size);
}

class HashTable {

  table = new Array(9);

  set = (key, val) => {
    const idx = hashFunc(key, this.table.length);
    if (this.table[idx])
      this.table[idx].push([key, val]);
    else
      this.table[idx] = [[key, val]];
  };

  get = (key) => {
    const idx = hashFunc(key, this.table.length);
    if (!(this.table[idx]))
      return null;
    return this.table[idx].find(([k]) => k === key)[1];
  };

}

const ht = new HashTable();
ht.set('firstname', 'bob');
ht.set('lastname', 'wat');
ht.set('age', 5);
console.log(ht.table);
console.log(ht.get('firstname'));
console.log(ht.get('age'));
