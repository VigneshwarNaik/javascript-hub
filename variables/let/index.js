// ===============================
// JavaScript Variables - let
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Variable
// ---------------------------------

let a = 100;

console.log(a);            // Output: 100



// ---------------------------------
// 2️⃣ Check Data Type
// ---------------------------------

let b = "Hello";

console.log(b);            // Hello
console.log(typeof b);     // string



// ---------------------------------
// 3️⃣ Reassign Value
// ---------------------------------

let c = 10;

c = 50;

console.log(c);            // 50

// Explanation:
// let allows value change



// ---------------------------------
// 4️⃣ Declare First, Assign Later
// ---------------------------------

let d;

d = "Bangalore";

console.log(d);            // Bangalore



// ---------------------------------
// 5️⃣ Multiple Variables
// ---------------------------------

let name = "Vigneshwar";
let age = 24;
let passed = true;

console.log(name);         // Vigneshwar
console.log(age);          // 24
console.log(passed);       // true



// ---------------------------------
// 6️⃣ Same Line Multiple Variables
// ---------------------------------

let x = 10, y = 20, z = 30;

console.log(x, y, z);      // 10 20 30



// ---------------------------------
// 7️⃣ Arithmetic with let
// ---------------------------------

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);  // 15
console.log(num1 - num2);  // 5
console.log(num1 * num2);  // 50
console.log(num1 / num2);  // 2



// ---------------------------------
// 8️⃣ Copy Value
// ---------------------------------

let p = 100;
let q = p;

console.log(q);            // 100



// ---------------------------------
// 9️⃣ Block Scope
// ---------------------------------

{
    let r = 500;
    console.log(r);        // 500
}

// console.log(r); Error

// Explanation:
// let works only inside block



// ---------------------------------
// 🔟 Redeclare Not Allowed
// ---------------------------------

let s = 10;

// let s = 20;   Error

console.log(s);



// ---------------------------------
// 1️⃣1️⃣ Case Sensitive
// ---------------------------------

let user = "Ram";
let User = "Sam";

console.log(user);         // Ram
console.log(User);         // Sam



// ---------------------------------
// 1️⃣2️⃣ Boolean Variable
// ---------------------------------

let isLoggedIn = true;

console.log(isLoggedIn);   // true



// ---------------------------------
// 1️⃣3️⃣ Array with let
// ---------------------------------

let arr = [10, 20, 30];

console.log(arr);



// ---------------------------------
// 1️⃣4️⃣ Object with let
// ---------------------------------

let student = {
    name: "John",
    marks: 90
};

console.log(student);



// ---------------------------------
// 1️⃣5️⃣ Change Object Property
// ---------------------------------

student.marks = 95;

console.log(student);



// ---------------------------------
// 1️⃣6️⃣ Real Life Example
// ---------------------------------

let cartItems = 3;

cartItems = 5;

console.log(cartItems);    // 5



// ---------------------------------
// 1️⃣7️⃣ typeof let Variable
// ---------------------------------

let city = "Mysore";

console.log(typeof city);  // string



// ---------------------------------
// 1️⃣8️⃣ Undefined Variable
// ---------------------------------

let data;

console.log(data);         // undefined



// ---------------------------------
// 1️⃣9️⃣ Best Practice Names
// ---------------------------------

let firstName = "Vigneshwar";
let totalMarks = 500;
let hasAccess = false;

console.log(firstName);
console.log(totalMarks);
console.log(hasAccess);



// ---------------------------------
// 2️⃣0️⃣ Final Example
// ---------------------------------

let score = 70;

score = score + 10;

console.log(score);        // 80