// ===============================
// JavaScript Null Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Null Value
// ---------------------------------

let a = null;

console.log(a);            // Output: null
console.log(typeof a);     // Output: object

// Explanation:
// null means intentionally empty value



// ---------------------------------
// 2️⃣ Assign Null Later
// ---------------------------------

let b = 100;
b = null;

console.log(b);            // Output: null

// Explanation:
// Old value removed and set empty



// ---------------------------------
// 3️⃣ Null vs Undefined
// ---------------------------------

let c = null;
let d;

console.log(c);            // null
console.log(d);            // undefined

console.log(c == d);       // true
console.log(c === d);      // false

// Explanation:
// null and undefined loosely equal
// but strictly different



// ---------------------------------
// 4️⃣ Boolean Conversion
// ---------------------------------

let e = null;

console.log(Boolean(e));   // false

// Explanation:
// null is falsy



// ---------------------------------
// 5️⃣ If Condition
// ---------------------------------

let f = null;

if (f) {
    console.log("True");
} else {
    console.log("Null is false");
}



// ---------------------------------
// 6️⃣ Object Example
// ---------------------------------

let person = {
    name: "Vigneshwar",
    address: null
};

console.log(person.address);   // null

// Explanation:
// address exists but currently empty



// ---------------------------------
// 7️⃣ Clear Value
// ---------------------------------

let username = "Vicky";

username = null;

console.log(username);     // null

// Explanation:
// Used to clear value manually



// ---------------------------------
// 8️⃣ Strict Type Check
// ---------------------------------

let g = null;

console.log(g === null);   // true



// ---------------------------------
// 9️⃣ typeof null Strange Case
// ---------------------------------

console.log(typeof null);  // object

// Explanation:
// This is old JavaScript bug/history



// ---------------------------------
// 🔟 Best Practice
// ---------------------------------

let mobile = null;

if (mobile === null) {
    console.log("No mobile number");
}