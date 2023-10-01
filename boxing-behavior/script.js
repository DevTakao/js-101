"use strict";

let greeting = "hello";
console.log("let greeting =>", greeting);

greeting = greeting.toUpperCase();
console.log("greeting.toUpperCase() =>", greeting);

console.log("-----------------");
console.log("typeof greeting =>", typeof greeting);
console.log("typeof greeting.toUpperCase =>", typeof greeting.toUpperCase);
console.log("-----------------");
console.log("??? Question: Why is toUpperCase callable on a primitive string?");
console.log("-----------------");

console.log(
  "When a method is invoked on a primitive, it is automatically boxed by a related wrapper object. Like this:"
);
let myName = String("taka");
console.log(`let myName = String("taka")`);
console.log("-----------------");
myName = myName.toUpperCase();
console.log("Then the method is called through the wrapper's prototype chain. Like this:");
console.log(`myName = String("taka").toUpperCase();`);

console.log("Finds and invokes ----> String.prototype.toUpperCase =>", String.prototype.toUpperCase);
console.log("-----------------");
console.log("You can see this more clearly by adding a new method to the prototype:");
console.log("myName.burmese =>", myName.burmese);
String.prototype.burmese = function () {
  return "Aung Kaung Khant";
};
console.log(`String.prototype.burmese = function () {
  return "Aung Kaung Khant";
};`);
console.log("myName.burmese =>", myName.burmese);
console.log("myName.burmese() =>", myName.burmese());

/* 
  Conclusion: 
  - primitives are boxed automatically by wrapper objects when methods are called on them.
  - the methods are then searched through the wrapper object's prototype chain.
  - calls it if it is found, not a function() error if not found.
*/
