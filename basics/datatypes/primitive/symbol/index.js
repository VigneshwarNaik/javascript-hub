// ===============================
// JavaScript Symbol Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Symbol Creation
// ---------------------------------

let a = Symbol();

console.log(a);            // Output: Symbol()
console.log(typeof a);     // Output: symbol

// Explanation:
// Symbol creates unique value



// ---------------------------------
// 2️⃣ Symbol with Description
// ---------------------------------

let b = Symbol("id");

console.log(b);            // Output: Symbol(id)
console.log(typeof b);     // Output: symbol

// Explanation:
// "id" is only description



// ---------------------------------
// 3️⃣ Every Symbol is Unique
// ---------------------------------

let c = Symbol("user");
let d = Symbol("user");

console.log(c == d);       // false
console.log(c === d);      // false

// Explanation:
// Same description but different symbols



// ---------------------------------
// 4️⃣ Use Symbol as Object Key
// ---------------------------------

let user = {};

let userId = Symbol("id");

user[userId] = 101;

console.log(user[userId]); // 101

// Explanation:
// Symbol key avoids name conflict



// ---------------------------------
// 5️⃣ Normal Key vs Symbol Key
// ---------------------------------

let person = {
    name: "Vigneshwar"
};

let secret = Symbol("secret");

person[secret] = "hidden";

console.log(person.name);      // Vigneshwar
console.log(person[secret]);   // hidden



// ---------------------------------
// 6️⃣ Symbol Keys Not in for...in
// ---------------------------------

for (let key in person) {
    console.log(key);          // name only
}

// Explanation:
// Symbol properties skipped in loop



// ---------------------------------
// 7️⃣ Get Symbol Keys
// ---------------------------------

console.log(Object.getOwnPropertySymbols(person));

// Output: [ Symbol(secret) ]



// ---------------------------------
// 8️⃣ Global Symbol Registry
// ---------------------------------

let e = Symbol.for("token");
let f = Symbol.for("token");

console.log(e === f);      // true

// Explanation:
// Symbol.for() returns same global symbol



// ---------------------------------
// 9️⃣ Symbol Key For Name
// ---------------------------------

console.log(Symbol.keyFor(e)); // token



// ---------------------------------
// 🔟 Cannot Auto Convert to String
// ---------------------------------

let g = Symbol("hello");

// console.log("Value: " + g); // Error

console.log(g.toString()); // Symbol(hello)



// ---------------------------------
// 1️⃣1️⃣ Boolean Conversion
// ---------------------------------

let h = Symbol();

console.log(Boolean(h));   // true



// ---------------------------------
// 1️⃣2️⃣ Real Life Example
// ---------------------------------

let product = {
    name: "Laptop"
};

let internalId = Symbol("internalId");

product[internalId] = 9999;

console.log(product.name);          // Laptop
console.log(product[internalId]);  // 9999



// ---------------------------------
// 1️⃣3️⃣ Best Practice
// ---------------------------------

let status = Symbol("status");

if (typeof status === "symbol") {
    console.log("Unique value created");
}