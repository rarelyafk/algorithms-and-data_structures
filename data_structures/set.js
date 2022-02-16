#!/usr/bin/env node

class MySet {
  constructor () {
    
    this.collection = [];

    this.values = () => this.collection;

    this.has = (item) => this.collection.includes(item);

    this.add = (item) => {
      if (this.has(item))
        return false;
      else
        this.collection.push(item);
    };

    this.remove = (item) => {
      if (this.has(item))
        this.collection.splice(this.collection.indexOf(item), 1);
    };

    this.length = () => this.collection.length;

    this.union = (that) => {
      const unionSet = new MySet();
      const setA = this.values();
      const setB = that.values();
      for (const item of setA)
        unionSet.add(item);
      for (const item of setB)
        unionSet.add(item);
      return unionSet;
    };

    this.intersection = (that) => {
      const intersectionSet = new MySet();
      const setA = this.values();
      const setB = that.values();
      for (const item of setA) {
        if (setB.includes(item))
          intersectionSet.add(item);
      }
      return intersectionSet;
    };

    this.difference = (that) => {
      const differenceSet = new MySet();
      const setA = this.values();
      const setB = that.values();
      for (const item of setA) {
        if (!(setB.includes(item)))
          differenceSet.add(item);
      }
      return differenceSet;
    };

    this.subSet = (that) => {
      const setA = this.values();
      return this.values().every((item) => that.has(item));
    };

  }
}
