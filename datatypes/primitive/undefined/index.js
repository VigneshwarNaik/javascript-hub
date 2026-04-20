// ===============================
// JavaScript Undefined Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Variable Declared but No Value
// ---------------------------------

let a;
console.log(a);            // Output: undefined
console.log(typeof a);     // Output: undefined

// Explanation:
// Variable created but value not assigned



// ---------------------------------
// 2️⃣ Assigned Later
// ---------------------------------

let b;
b = 100;

console.log(b);            // Output: 100
console.log(typeof b);     // Output: number



// ---------------------------------
// 3️⃣ Function Without Return
// ---------------------------------

function test() {
}

let c = test();

console.log(c);            // Output: undefined
console.log(typeof c);     // Output: undefined

// Explanation:
// Function did not return anything



// ---------------------------------
// 4️⃣ Access Missing Object Property
// ---------------------------------

let person = {
    name: "Vigneshwar"
};

console.log(person.age);   // Output: undefined

// Explanation:
// age property does not exist



// ---------------------------------
// 5️⃣ Array Index Not Present
// ---------------------------------

let arr = [10, 20, 30];

console.log(arr[5]);       // Output: undefined

// Explanation:
// Index 5 not available



// ---------------------------------
// 6️⃣ Explicitly Assign Undefined
// ---------------------------------

let d = undefined;

console.log(d);            // Output: undefined
console.log(typeof d);     // Output: undefined



// ---------------------------------
// 7️⃣ Comparison with null
// ---------------------------------

let e;

console.log(e == null);    // true
console.log(e === null);   // false
console.log(e === undefined); // true

// Explanation:
// undefined loosely equals null
// but strictly different



// ---------------------------------
// 8️⃣ Boolean Conversion
// ---------------------------------

let f;

console.log(Boolean(f));   // false

// Explanation:
// undefined is falsy



// ---------------------------------
// 9️⃣ In If Condition
// ---------------------------------

let g;

if (g) {
    console.log("True");
} else {
    console.log("Undefined is false");
}



// ---------------------------------
// 🔟 Best Practice
// ---------------------------------

let username;

if (username === undefined) {
    console.log("Value not assigned");
}