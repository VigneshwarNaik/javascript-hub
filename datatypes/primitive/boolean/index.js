// ===============================
// JavaScript Boolean Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Boolean Values
// ---------------------------------

let a = true;
console.log(a);            // Output: true
console.log(typeof a);     // Output: boolean

let b = false;
console.log(b);            // Output: false
console.log(typeof b);     // Output: boolean



// ---------------------------------
// 2️⃣ Boolean vs String
// ---------------------------------

let c = "true";
console.log(c);            // Output: true
console.log(typeof c);     // Output: string

let d = "false";
console.log(d);            // Output: false
console.log(typeof d);     // Output: string



// ---------------------------------
// 3️⃣ Comparison Operators Return Boolean
// ---------------------------------

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(5 <= 2);       // false
console.log(10 == 10);     // true
console.log(10 != 5);      // true



// ---------------------------------
// 4️⃣ If Condition with Boolean
// ---------------------------------

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome User");
} else {
    console.log("Please Login");
}



// ---------------------------------
// 5️⃣ Real Life Boolean Variables
// ---------------------------------

let lightOn = false;
let fanRunning = true;
let examPassed = true;
let doorClosed = false;

console.log(lightOn);      // false
console.log(fanRunning);   // true
console.log(examPassed);   // true
console.log(doorClosed);   // false



// ---------------------------------
// 6️⃣ Boolean() Function Conversion
// ---------------------------------

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false



// ---------------------------------
// 7️⃣ Logical Operators
// ---------------------------------

console.log(true && true);    // true
console.log(true && false);   // false

console.log(true || false);   // true
console.log(false || false);  // false

console.log(!true);           // false
console.log(!false);          // true



// ---------------------------------
// 8️⃣ Strict Equality
// ---------------------------------

console.log(true == 1);       // true
console.log(true === 1);      // false

console.log(false == 0);      // true
console.log(false === 0);     // false



// ---------------------------------
// 9️⃣ Truthy / Falsy Examples
// ---------------------------------

if ("Hello") {
    console.log("Truthy Value");
}

if (0) {
    console.log("Will not print");
} else {
    console.log("0 is Falsy");
}



// ---------------------------------
// 🔟 Best Practice Variable Names
// ---------------------------------

let isActive = true;
let hasPermission = false;
let isStudent = true;

console.log(isActive);
console.log(hasPermission);
console.log(isStudent);