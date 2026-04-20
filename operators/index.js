// ===============================
// JavaScript Operators
// ===============================


// ---------------------------------
// 1️⃣ Arithmetic Operators
// ---------------------------------

let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000



// ---------------------------------
// 2️⃣ Assignment Operators
// ---------------------------------

let c = 5;

c += 2;
console.log(c);       // 7

c -= 1;
console.log(c);       // 6

c *= 3;
console.log(c);       // 18

c /= 2;
console.log(c);       // 9

c %= 4;
console.log(c);       // 1



// ---------------------------------
// 3️⃣ Comparison Operators
// ---------------------------------

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 9);      // false

console.log(5 == "5");     // true
console.log(5 === "5");    // false

console.log(5 != 3);       // true
console.log(5 !== "5");    // true



// ---------------------------------
// 4️⃣ Logical Operators
// ---------------------------------

console.log(true && true);    // true
console.log(true && false);   // false

console.log(true || false);   // true
console.log(false || false);  // false

console.log(!true);           // false
console.log(!false);          // true



// ---------------------------------
// 5️⃣ Increment / Decrement
// ---------------------------------

let d = 5;

d++;
console.log(d);          // 6

d--;
console.log(d);          // 5



// ---------------------------------
// 6️⃣ Pre and Post Increment
// ---------------------------------

let e = 10;

console.log(++e);        // 11 (first increase)

let f = 10;

console.log(f++);        // 10 (print first)
console.log(f);          // 11



// ---------------------------------
// 7️⃣ String Concatenation
// ---------------------------------

let first = "Hello";
let second = "World";

console.log(first + " " + second);
// Hello World



// ---------------------------------
// 8️⃣ Ternary Operator
// ---------------------------------

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);     // Adult



// ---------------------------------
// 9️⃣ typeof Operator
// ---------------------------------

console.log(typeof 100);       // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean



// ---------------------------------
// 🔟 instanceof Operator
// ---------------------------------

let arr = [1, 2, 3];

console.log(arr instanceof Array);   // true



// ---------------------------------
// 1️⃣1️⃣ Nullish Coalescing ??
// ---------------------------------

let name = null;

console.log(name ?? "Guest");
// Guest



// ---------------------------------
// 1️⃣2️⃣ Optional Chaining ?.
// ---------------------------------

let user = null;

console.log(user?.name);
// undefined



// ---------------------------------
// 1️⃣3️⃣ Bitwise Operators
// ---------------------------------

console.log(5 & 1);   // 1
console.log(5 | 1);   // 5
console.log(5 ^ 1);   // 4
console.log(~5);      // -6

console.log(5 << 1);  // 10
console.log(5 >> 1);  // 2



// ---------------------------------
// 1️⃣4️⃣ Comma Operator
// ---------------------------------

let x = (1, 2, 3);

console.log(x);       // 3



// ---------------------------------
// 1️⃣5️⃣ Real Life Example
// ---------------------------------

let cart = 2;

cart += 3;

console.log(cart);    // 5

let isLoggedIn = true;

console.log(isLoggedIn && cart > 0);
// true



// ---------------------------------
// 1️⃣6️⃣ Best Practice
// ---------------------------------

console.log(5 === 5);      // true
console.log(5 === "5");    // false

// Use === instead of ==



// ---------------------------------
// 1️⃣7️⃣ Final Example
// ---------------------------------

let score = 70;

score += 10;

let status = score >= 80 ? "Passed" : "Failed";

console.log(status);   // Passed