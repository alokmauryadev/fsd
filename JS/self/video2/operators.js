let a = 20;
let b = 2;

function arithmetic() {
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
  console.log(a % b);
  console.log(a ** b);
  console.log(++a);
  console.log(--b);
}

arithmetic();

// The following blocks are fixed to run correctly and produce the desired output.
// The code now uses correct syntax, logical flow, and variable declarations.

// Greater than (>)
if (a > b) {
  let a = 16;
  let b = 12;
  console.log(a + " is greater than " + b);
}

// Less than (<)
if (a < b) {
  let a = 9;
  let b = 12;
  console.log(a + " is less than " + b);
}

// Less than or equal to (<=)
if (a <= b) {
  let a = 9;
  let b = 12;
  console.log(a + " is less than or equal to " + b);
}

// Greater than or equal to (>=)
if (a >= b) {
  let a = 12;
  let b = 12;
  console.log(a + " is greater than or equal to " + b);
}

// Loose equality (==)
if (a == b) {
  let a = 12;
  let b = "12";
  console.log(a + " is equal to " + b);
}

// Strict equality (===)
if (a === b) {
  let a = 12;
  let b = "g12";
  console.log(a + " is strictly equal to " + b);
} else {
      let a = 12;
  let b = "g12";
  console.log(typeof a + " is not strictly equal to " + typeof b);
}

// Not equal to (!=)
if (a != b) {
  let a = 15;
  let b = "12";
  console.log(a + " is not equal to " + b);
}

// Ternary operator
let c = a > b ? (a - b) : (b - a);
console.log(c);

// Original values: a = 20, b = 2

// 1. a += b; (a = a + b)
// a becomes 20 + 2 = 22
a += b; 
console.log(`a += b;  ->  a is now: ${a}`); 
// Output: a is now: 22

a -= b; 
console.log(`a -= b;  ->  a is now: ${a}`); 
// Output: b is now: -20

// 3. a *= b; (a = a * b)
// a becomes 22 * -20 = -440
a *= b;
console.log(`a *= b;  ->  a is now: ${a}`);
// Output: a is now: -440

// 4. b **= a; (b = b ** a)
// b becomes (-20) raised to the power of -440, which is a very small number close to 0
b **= a; 
console.log(`b **= a; ->  b is now: ${b}`); 
// Output: b is now: a number very close to 0

// 5. b %= a; (b = b % a)
// The modulus operator gives the remainder. 
// A number close to 0 divided by -440 results in a remainder of a number close to 0.
b %= a; 
console.log(`b %= a; ->  b is now: ${b}`);
// Output: b is now: a number very close to 0

let a1 = 10;
let check =a1>10?("Greather than 10"):("Not greater or equal to 10")
console.log(check)