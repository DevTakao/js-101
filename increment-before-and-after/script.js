"use strict";

console.log("=== increment operator prefix ===");
let a = 100;
let b = ++a;

console.log(`let a = 100;
let b = ++a;
`);

console.log("a =>", a);
console.log("b (got the value after increment) =>", b);

console.log("=== increment operator postfix ===");

let c = 100;
let d = c++;

console.log(`let c = 100;
let d = c++;
`);
console.log("c =>", c);
console.log("d (got the value before increment) =>", d);

/* 
  Conclusion: 
  - increment OR decrement operator has side effect on the value itself and also returns a value
  - that side effect happens BEFORE or AFTER the assignment depending on the position of the operator
  - prefixed operator causes side effect to happen BEFORE returning value
  - postfixed operator causes side effect to happen AFTER returning value
  - they are not the same!
*/
