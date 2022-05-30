#!/usr/bin/env node

/*
RSA = [R]ivest-[S]hamir-[A]dleman

///////////////////////////////////////////////////////////////////////////////
RSA FOUNDATION
based on a very hard integer factorization problem -
it is very hard to work out what the 2 prime factors of
  a large semiprime number (a number that is the product of exactly 2 primes)

Original Paper:
https://people.csail.mit.edu/rivest/Rsapaper.pdf

///////////////////////////////////////////////////////////////////////////////
Historical Example:

"Can the reader say what two numbers multiplied together
will produce the number 8,616,460,799?
I think it unlikely that anyone but myself will ever know."
-William Stanley Jevons, "Principles of Science", 1874

we know now it is:
86,681 * 96,079 (factor of 2 primes)

///////////////////////////////////////////////////////////////////////////////
Basic Steps:
1. Choose - 2 very large prime numbers
2. Let N = p * q
3. Let T = ((p - 1) * (q - 1)) // Euler's Totient
4. Choose 2 numbers e & d such that ((e * d) mod T) = 1 // mod = modular arithmetic
5. Publish N & e (public key) (d remains private)

///////////////////////////////////////////////////////////////////////////////
simple example:
p = 2
q = 7
N =
  (p * q) =
  (2 * 7) =
  14
T =
  ((p - 1) * (q - 1)) =
  ((2 - 1) * (7 - 1)) =
  (1 * 6) =
  6
choose e & d such that
  choosing e
    ((e * d) mod T) = 1
    ((e * d) mod 6) = 1
    ((e * d) % 6) = 1
    e must be less than 6
    e must be coprime with 6 & 1
    e = 5
  choosing d
    multiples of 5
    ((e * d) mod T) = 1
    ((5 * d) mod 6) = 1
    ((5 * d) % 6) = 1
    could use 5, 11, or 17
    d = 11
  publish public key:
    (e, N) =
    (5, 14)
  keep private key:
    (d, N) =
    (11, 14)

///////////////////////////////////////////////////////////////////////////////
 plaintext: 'b' (2)
encryption: (5, 14)
  ((2^5) mod 14) =
  ((2 ** 5) % 14) =
  (32 % 14) =
  4
ciphertext: 'd' (4)

ciphertext: 'd' (4)
decryption: (11, 14)
  ((4^11) mod 14) =
  ((4 ** 11) % 14) =
  (4194304 % 14) =
  2
 plaintext: 'b' (2)

1. Pick 2 prime numbers (>250 digits) (p, q)
2. Choose N =
   (p * q)
3. Phi Function -
   Phi(N) = 
   (p -1)(q - 1)
4. Choose e (encryption) such that:
   a. 1 < e < Phi(N)
   b. coprime with (N, Phi(N))
5. Choose d (decryption) such that:
   a. ((d * e) mod Phi(N)) = 1

///////////////////////////////////////////////////////////////////////////////
Modular Arithmetic:

Clock Conversions
analogy of 24-hour to 12-hour clock conversions
08:00 = 8:00AM ( 8 % 12 = 8)
15:00 = 3:00PM (15 % 12 = 3)
21:00 = 9:00PM (21 % 12 = 9)

Caesar Cipher
Encryption:
  k =
    key (positional shift)
    7 (as an example)
  c =
    character (to encrypt)
    'b' (as an example)
    2 (2nd letter in latin alphabet)
  Ci =
    (c + k) mod 26 = 
    (2 + 7) mod 26 =
    9 mod 26 =
    9
    'i' (9th letter in latin alphabet)

Decryption:
  k =
    key (positional shift)
    7 (as an example)
  c =
    character (to decrypt)
    'i' (as an example)
    9
  Mi =
    (c - k) mod 26 =
    (9 - 7) mod 26 =
    2 mod 26 =
    2
    'b' (decrypted character)

///////////////////////////////////////////////////////////////////////////////
Euler's Totient:


///////////////////////////////////////////////////////////////////////////////
Extended Euclidian Algorithm:


///////////////////////////////////////////////////////////////////////////////
History of Breaking RSA:

RSA-100
RSA-100 has 100 decimal digits (330 bits)
Its factorization was announced on April 1, 1991
the factorization took a few days using a Parallel Computer
1522605027922533360535618378132637429718068114961380688657908494580122963258952897654000350692006139
= (37975227936943673922808872755445627854565536638199 * 40094690950920881030683735292761468389214899724061)

RSA-240
RSA-240 has 240 decimal digits (795 bits)
It's factorization was announced in November 2019
The CPU time spent on finding these factors amounted to approximately
900 core-years on a 2.1 GHz Intel Xeon Gold 6130 CPU

RSA-260+
nothing beyond RSA-260 has been broken/factorized yet...
///////////////////////////////////////////////////////////////////////////////
*/

// ASCII
// character to ASCII
const c2i = c => c.charCodeAt(0);
// ASCII to character
const i2c = i => String.fromCharCode(i);

/* Takes an array of integers representing ASCII chars.
 * Returns a string of those integers ASCII conversions.
 * // UInt8Array (0-255)
 *
 * @param {number[]} numArr
 * @returns {string}
 */
const numArr2Str = numArr => (
  numArr.reduce((str, n) => str + i2c(n), '')
);


///////////////////////////////////////////////////////////////////////////////
// 1. Pick 2 prime numbers (>260 digits) (p, q)


// 2. Choose N =
//    (p * q)
getN = (p, q) => (p * q);

// 3. Phi Function -
//    (Euler's Totient)
//    Phi(N) = 
//    ((p -1) * (q - 1))
getEulersTotient = (p, q) => ((p - 1) * (q - 1));

// 4. Choose e (encryption) such that:
//    a. 1 < e < Phi(N)
//    b. coprime with (N, Phi(N))


// 5. Choose d (decryption) such that:
//    a. ((d * e) mod Phi(N)) = 1


///////////////////////////////////////////////////////////////////////////////
// 2 distinct prime numbers chosen
// security considerations: keep them large and far apart
const P = 191n;
const Q = 223n;
const N = (P * Q);

// calculate Phi
const PHI = ((P - 1n) * (Q - 1n)); // 42180n

// gcd - Greatest Common Denominator
const gcd = (n1, n2) => (
  !(n2)
    ? n1
    : gcd(n2, n1 % n2)
);

// Euler's Totient Function (Phi Function)
const phi = N => {
  // return Greater Common Denominator of two given numbers
  const gcd = (a, b) => (
    (a === 0)
      ? b
      : gcd((b % a), a)
  );
  // init
  var result = 1;
  // walk through all integers up to n
  for (const i = 2; i < N; i++) {
    if (gcd(i, N) === 1)
      result++;
  }
  return result;
};

// extended GCD
const extendedGCD = (n1, n2) => {
  let an1 = Math.abs(n1);
  let an2 = Math.abs(n2);
  while (an1 && an2 && (an1 !== an2)) {
    if (an1 > an2)
      [an1, an2] = [(an1 - an2), an2];
    else
      [an1, an2] = [an1, (an2 - an1)];
  }
  return (an1 || an2);
};

// Euler's Totient
// encryption exponent E
// (1 < E < phi(N))
//   and E is relatively prime to phi(N)
//   (gcd(E, phi(N)) = 1)
// pick a prime that does not divide phi(N)
const genEncryptionExponent = PHI => {
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
  const { E, N } = publicKey;
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
