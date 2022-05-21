#!/usr/bin/env node

const one_to_ten = (num, acc) => {
  // can we do this with ternerary?
  if (num > 10)
    return acc;
  else {
    acc.push(num);
    return one_to_ten((num + 1), acc);
  }
};

const res = one_to_ten(1, []);
console.log(res);
