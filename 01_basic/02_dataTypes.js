"use strict"; // treat all JS code as modern JS(newer version)

// alert( 3 + 3)  // we are using nodejs, not browser

console.log(3 + 3); console.log("hello world")  // this will execute 
// but not professional way of doing it and code readibility should be high

// istead of write like line 5, we should write like below
console.log(3 + 3)
console.log("hello world")

// number => 2 to power 53 then we will use bigint dataType
// bigint 
// string => ""
// boolean => true/false
// null => empty value
// undefined => not assigned value
// symbol => unique identifier

// object => key value pair
console.log(typeof "hello world")
console.log(typeof null)
// array => list of items
// function => block of code to perform a specific task

/* // Data types in JS

// 1. Primitive data types
// a. number
let a = 10; // number data type
let b = 3.14; // number data type
console.log(a);
console.log(b);

// b. string
let name = "John Doe"; // string data type
console.log(name);
// c. boolean
let isActive = true; // boolean data type
let isLoggedIn = false;
console.log(isActive);
console.log(isLoggedIn);
// d. null
let emptyValue = null; // null data type
console.log(emptyValue);
// e. undefined
let notAssigned; // undefined data type
console.log(notAssigned);
// f. symbol
let sym = Symbol("uniqueIdentifier"); // symbol data type
console.log(sym);
// g. bigint  */


// number => 2 to power 53 then we will use bigint dataType
let n = 1234567890123456789012345678901234567890n; // bigInt
console.log(n);n


/*  // 2. Non-primitive data types
// a. object
let person = {
    name: "Alice",
    age: 30
};
console.log(person);
// b. array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// c. function
function greet() {
    console.log("Hello!");
}
greet();

// Note: In JavaScript, data types are dynamic, meaning a variable can hold any type of data at any time.
// You can check the type of a variable using the typeof operator.
let variable = 42;
console.log(typeof variable); // "number"
variable = "Now I'm a string";
console.log(typeof variable); // "string"
variable = true;
console.log(typeof variable); // "boolean"
variable = { key: "value" };
console.log(typeof variable); // "object"   
variable = null;
console.log(typeof variable); // "object" (this is a known quirk in JavaScript)
variable = undefined;
console.log(typeof variable); // "undefined"
variable = Symbol("id");
console.log(typeof variable); // "symbol"
variable = 9007199254741991n;
console.log(typeof variable); // "bigint"  */


