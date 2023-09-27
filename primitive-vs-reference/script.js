"use strict";

let a = "original";
let b = a; // copied by value

a = "CHANGED";
console.log("a =>", a);
console.log("b =>", b);

console.log("----------");

let arr1 = [];
let arr2 = arr1; // copied by reference

arr1.push("Modification applies to the shared value and reflects across all references.");
console.log("arr1 =>", arr1);
console.log("arr2 =>", arr2);

console.log("----------");

arr1 = [
  "Re-assigning replaces the target reference of reassigned variable",
  "and does not reflect across all references.",
];
console.log("arr1 =>", arr1);
console.log("arr2 =>", arr2);
