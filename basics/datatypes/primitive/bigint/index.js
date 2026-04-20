// ===============================
// JavaScript BigInt Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic BigInt Value
// ---------------------------------

let a = 1234567890123456789012345678901234567890n;

console.log(a);
// Output: 1234567890123456789012345678901234567890n

console.log(typeof a);
// Output: bigint

// Explanation:
// Add n at end of number to create BigInt



// ---------------------------------
// 2️⃣ Large Safe Integer Problem
// ---------------------------------

let b = 9007199254740991;      // MAX_SAFE_INTEGER
let c = 9007199254740992;
let d = 9007199254740993;

console.log(b); 
console.log(c);
console.log(d);

// Explanation:
// Normal number loses precision after safe limit



// ---------------------------------
// 3️⃣ Correct Large Number with BigInt
// ---------------------------------

let e = 9007199254740993n;

console.log(e);           
console.log(typeof e);    

// Explanation:
// BigInt stores very large integers exactly



// ---------------------------------
// 4️⃣ Using BigInt() Function
// ---------------------------------

let f = BigInt(100);

console.log(f);            // 100n
console.log(typeof f);     // bigint



// ---------------------------------
// 5️⃣ Addition
// ---------------------------------

let g = 10n;
let h = 20n;

console.log(g + h);        // 30n



// ---------------------------------
// 6️⃣ Subtraction
// ---------------------------------

console.log(50n - 20n);    // 30n



// ---------------------------------
// 7️⃣ Multiplication
// ---------------------------------

console.log(5n * 3n);      // 15n



// ---------------------------------
// 8️⃣ Division
// ---------------------------------

console.log(10n / 3n);     // 3n

// Explanation:
// Decimal part removed



// ---------------------------------
// 9️⃣ Remainder
// ---------------------------------

console.log(10n % 3n);     // 1n



// ---------------------------------
// 🔟 Cannot Mix Number and BigInt
// ---------------------------------

let i = 10n;
// console.log(i + 5);     

// Error:
// Cannot mix BigInt and other types

console.log(i + 5n);       // 15n



// ---------------------------------
// 1️⃣1️⃣ Comparison
// ---------------------------------

console.log(10n > 5n);     // true
console.log(10n == 10);    // true
console.log(10n === 10);   // false



// ---------------------------------
// 1️⃣2️⃣ Boolean Conversion
// ---------------------------------

console.log(Boolean(1n));  // true
console.log(Boolean(0n));  // false



// ---------------------------------
// 1️⃣3️⃣ Real Life Example
// ---------------------------------

let bankTransactionId = 999999999999999999999999999999n;

console.log(bankTransactionId);



// ---------------------------------
// 1️⃣4️⃣ String Conversion
// ---------------------------------

let j = 123n;

console.log(String(j));      // "123"
console.log(typeof String(j)); // string



// ---------------------------------
// 1️⃣5️⃣ Best Practice
// ---------------------------------

let population = 8000000000000000000n;

if (typeof population === "bigint") {
    console.log("Large integer stored safely");
}