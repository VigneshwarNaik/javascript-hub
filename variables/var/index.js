// ===============================
// JavaScript Variables - var
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic var Variable
// ---------------------------------

var a = 100;

console.log(a);            // Output: 100



// ---------------------------------
// 2️⃣ Reassign Value (Allowed)
// ---------------------------------

var b = 10;

b = 50;

console.log(b);            // 50

// Explanation:
// var allows value change



// ---------------------------------
// 3️⃣ Redeclare Variable (Allowed)
// ---------------------------------

var c = 20;

var c = 30;

console.log(c);            // 30

// Explanation:
// var allows redeclaration (not safe)



// ---------------------------------
// 4️⃣ Function Scope (Not Block Scope)
// ---------------------------------

if (true) {
    var d = 200;
}

console.log(d);            // 200

// Explanation:
// var ignores block {}, works globally or inside function



// ---------------------------------
// 5️⃣ Function Scope Example
// ---------------------------------

function test() {
    var e = 500;
    console.log(e);        // 500
}

test();

// console.log(e); ❌ Error

// Explanation:
// var works inside function only



// ---------------------------------
// 6️⃣ Hoisting
// ---------------------------------

console.log(f);            // undefined

var f = 100;

// Explanation:
// var is hoisted (declared at top automatically)



// ---------------------------------
// 7️⃣ Declare Without Value
// ---------------------------------

var g;

console.log(g);            // undefined



// ---------------------------------
// 8️⃣ Multiple Variables
// ---------------------------------

var x = 10, y = 20, z = 30;

console.log(x, y, z);



// ---------------------------------
// 9️⃣ Array with var
// ---------------------------------

var arr = [1, 2, 3];

console.log(arr);



// ---------------------------------
// 🔟 Object with var
// ---------------------------------

var obj = {
    name: "Ram"
};

console.log(obj);



// ---------------------------------
// 1️⃣1️⃣ Real Life Example
// ---------------------------------

var count = 1;

count = count + 1;

console.log(count);        // 2



// ---------------------------------
// 1️⃣2️⃣ typeof var Variable
// ---------------------------------

var name = "Vigneshwar";

console.log(typeof name);  // string



// ---------------------------------
// 1️⃣3️⃣ Problem with var
// ---------------------------------

for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);   // 3 (still accessible)

// Explanation:
// var leaks outside loop (problem)



// ---------------------------------
// 1️⃣4️⃣ Best Practice (Avoid var)
// ---------------------------------

// Use let or const instead of var