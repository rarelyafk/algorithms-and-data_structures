#!/usr/bin/env node

// 2 distinct prime numbers chosen
// security considerations: keep them large and far apart
const P = 191n;
const Q = 223n;
const N = (P * Q);

// Phi
const PHI = ((P - 1n) * (Q - 1n)); // 42180n

// Euler's Totient
// encryption exponent E
// (1 < E < phi(N))
//   and E is relatively prime to phi(N)
//   (gcd(E, phi(N)) = 1)
// pick a prime that does not divide phi(N)
const genEncryptionExponent = PHI => {
  const gcd = (a, b) => {
    if (!b)
      return a;
    else
      return gcd(b, a % b);
  }
  let e = 47n;
  while (gcd(e, PHI) !== 1n)
    e += 2n;
  return e;
};

const E = 47n;
// const E = genEncryptionExponent(PHI);

// decryption exponent D
// Extended Euclidian Algo
// takes two ints a and b
// returns GCD, as well as the coefficients s and t
//   in the linear combination of a and b that is equal to the GCD
// needs to be positive, not negative number
const computeDecryptionExponent = (e, PHI) => {
  const extendedGCD = (n1, n2) => {
    let a = Math.abs(n1);
    let b = Math.abs(n2);
    while (a && b && (a !== b)) {
      if (a > b)
        [a, b] = [(a - b), b];
      else
        [a, b] = [a, b - a];
      return (a || b);
    }
  };
  let d = extendedGCD(e, PHI).s;
  while (d < 1n)
    d += PHI;
  return d;
};

const D = computeDecryptionExponent(E, PHI);

const publicKey = { E, N };
const secretKey = { D, N };

const encrypt = (m, publicKey) => {
  // message needs to 1st be converted to int
  // (0 <= m < N)
  // also check that gcd(m, N) = 1
  // (gcd should not be equal to P or Q
  // then, message m is encrypted to ciphertext using the publickKey
  // by computing the remainder of m^E divided by N
  if ((m < 0n) || (m >= N))
    throw new Error(`Condition 0 <= m < N not met.\n...m = ${m}`);
  if ((gcd(m, N)) !== 1n)
    throw new Error("Condition gcd(m, n) = 1 not met.");
  const C = ((m ** E) % N);
  return C;
};

const decrypt = (c, secretKey) => {
  const { D, N } = secretKey;
  const M = ((c ** D) % N);
  return M;
};

// test
const p = 191n;
const q = 223n;

const n = p * q;
const phi = (p - 1n) * (q - 1n);

const e = generateEncryptionExponent(phi);
const d = computeDecryptionExponent(e, phi);

const publicKey = { e, n };
const secretKey = { d, n };

const m = textToNumber("Hi");
const c = encrypt(m, publicKey);
const m2 = decrypt(c, secretKey);

console.log(numberToText(m2));
