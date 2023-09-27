"use strict";

//? confusing behaviors
console.log("---confusing behavior---");
console.log("\x1b[36mNaN === NaN:\x1b[0m", NaN === NaN);
console.log("\x1b[36mtypeof NaN:\x1b[0m", typeof NaN);

console.log("---define some variables---");
let someNaN = "a" / 100;
console.log("someNaN:", someNaN);
let someString = "What is wrong with NaN?";
console.log("someString:", someString);

//! bad
console.log("---bad---");
console.log("\x1b[31misNaN(someNaN):\x1b[0m", isNaN(someNaN));
console.log("\x1b[31misNaN(someString):\x1b[0m", isNaN(someString));

//* good
console.log("---good---");
console.log("\x1b[32mNumber.isNaN(someNaN):\x1b[0m", Number.isNaN(someNaN));
console.log("\x1b[32mNumber.isNaN(someString):\x1b[0m", Number.isNaN(someString));

//* good
console.log("---good---");
console.log("\x1b[32mObject.is(someNaN, NaN):\x1b[0m", Object.is(someNaN, NaN));
console.log("\x1b[32mObject.is(someString, NaN):\x1b[0m", Object.is(someString, NaN));

//* magic
console.log("---MAGIC---");
console.log("\x1b[32mif(someNaN !== someNaN):\x1b[0m", someNaN !== someNaN);
console.log("\x1b[32mif(someString === someString):\x1b[0m", someString !== someString);

/* 
  Conclusion: 
  - NaN is never equal to NaN
  - The 'typeof' operator returns 'number' on NaN
  - isNaN() returns false for every value that is not NaN, which may cause bugs
  - Please use Number.isNaN() or Object.is() to do NaN comparisons.
*/
