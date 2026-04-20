// ===============================
// JavaScript Variables - const
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic const Variable
// ---------------------------------

const a = 100;

console.log(a);            // Output: 100



// ---------------------------------
// 2️⃣ Check Data Type
// ---------------------------------

const b = "Hello";

console.log(b);            // Hello
console.log(typeof b);     // string



// ---------------------------------
// 3️⃣ Cannot Reassign Value
// ---------------------------------

const c = 10;

// c = 50;   ❌ Error

console.log(c);            // 10

// Explanation:
// const value cannot be changed



// ---------------------------------
// 4️⃣ Must Assign During Declaration
// ---------------------------------

// const d;   ❌ Error

const d = "Bangalore";

console.log(d);



// ---------------------------------
// 5️⃣ Multiple Constants
// ---------------------------------

const name = "Vigneshwar";
const age = 24;
const passed = true;

console.log(name);
console.log(age);
console.log(passed);



// ---------------------------------
// 6️⃣ Same Line Multiple Constants
// ---------------------------------

const x = 10, y = 20, z = 30;

console.log(x, y, z);



// ---------------------------------
// 7️⃣ Arithmetic with const
// ---------------------------------

const num1 = 10;
const num2 = 5;

console.log(num1 + num2);   // 15
console.log(num1 - num2);   // 5
console.log(num1 * num2);   // 50
console.log(num1 / num2);   // 2



// ---------------------------------
// 8️⃣ Block Scope
// ---------------------------------

{
    const city = "Mysore";
    console.log(city);
}

// console.log(city); ❌ Error

// Explanation:
// const works only inside block



// ---------------------------------
// 9️⃣ Redeclare Not Allowed
// ---------------------------------

const p = 100;

// const p = 200; ❌ Error

console.log(p);



// ---------------------------------
// 🔟 Case Sensitive
// ---------------------------------

const user = "Ram";
const User = "Sam";

console.log(user);         // Ram
console.log(User);         // Sam



// ---------------------------------
// 1️⃣1️⃣ Boolean Constant
// ---------------------------------

const isLoggedIn = true;

console.log(isLoggedIn);



// ---------------------------------
// 1️⃣2️⃣ Array with const
// ---------------------------------

const arr = [10, 20, 30];

console.log(arr);

// Can modify array items
arr.push(40);

console.log(arr);



// ---------------------------------
// 1️⃣3️⃣ Object with const
// ---------------------------------

const student = {
    name: "John",
    marks: 90
};

console.log(student);



// ---------------------------------
// 1️⃣4️⃣ Change Object Property
// ---------------------------------

student.marks = 95;

console.log(student);

// Explanation:
// Object properties can change



// ---------------------------------
// 1️⃣5️⃣ Cannot Replace Whole Object
// ---------------------------------

// student = {}; ❌ Error



// ---------------------------------
// 1️⃣6️⃣ Real Life Example
// ---------------------------------

const PI = 3.14159;
const country = "India";

console.log(PI);
console.log(country);



// ---------------------------------
// 1️⃣7️⃣ typeof const Variable
// ---------------------------------

const language = "JavaScript";

console.log(typeof language);   // string



// ---------------------------------
// 1️⃣8️⃣ Best Practice
// ---------------------------------

const fullName = "Vigneshwar Naik";
const MAX_USERS = 100;

console.log(fullName);
console.log(MAX_USERS);



// ---------------------------------
// 1️⃣9️⃣ Final Example
// ---------------------------------

const marks = 90;

console.log("Marks =", marks);