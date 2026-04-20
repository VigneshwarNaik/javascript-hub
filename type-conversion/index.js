// ==========================================
// JavaScript Type Conversion
// Full Code with typeof + Explanation
// ==========================================


// ==================================================
// 🔹 Two Types of Type Conversion
// ==================================================

// 1. Explicit Conversion
// Programmer manually converts datatype

// 2. Implicit Conversion
// JavaScript automatically converts datatype



// ==================================================
// 1️⃣ EXPLICIT CONVERSION
// ==================================================

// ---------------------------------
// String to Number using Number()
// ---------------------------------

let a = "100";

console.log(Number(a));            // 100
console.log(typeof Number(a));     // number

// Explanation:
// "100" is string
// Number() manually converts string to number



// ---------------------------------
// Invalid String to Number
// ---------------------------------

let b = "Hello";

console.log(Number(b));            // NaN
console.log(typeof Number(b));     // number

// Explanation:
// "Hello" cannot become valid number



// ---------------------------------
// parseInt()
// ---------------------------------

console.log(parseInt("123"));      
console.log(typeof parseInt("123"));   // number

// Explanation:
// Extract integer value

console.log(parseInt("123px"));    
console.log(typeof parseInt("123px")); // number

// Explanation:
// Reads starting number only



// ---------------------------------
// parseFloat()
// ---------------------------------

console.log(parseFloat("10.75"));  
console.log(typeof parseFloat("10.75")); // number

// Explanation:
// Converts decimal string to number



// ---------------------------------
// Number to String
// ---------------------------------

let c = 500;

console.log(String(c));           
console.log(typeof String(c));     // string

// Explanation:
// Number converted to string manually



// ---------------------------------
// toString()
// ---------------------------------

let d = 200;

console.log(d.toString());        
console.log(typeof d.toString());  // string

// Explanation:
// Another way to convert number to string



// ---------------------------------
// Boolean Conversion
// ---------------------------------

console.log(Boolean(1));         
console.log(typeof Boolean(1));   // boolean

// Explanation:
// Non-zero value becomes true

console.log(Boolean(0));         
console.log(typeof Boolean(0));   // boolean

// Explanation:
// Zero becomes false



// ==================================================
// 2️⃣ IMPLICIT CONVERSION
// ==================================================

// JavaScript converts automatically during operations



// ---------------------------------
// + Operator with String
// ---------------------------------

console.log("5" + 2);           
console.log(typeof ("5" + 2));   // string

// Explanation:
// Number 2 converted to string
// Result = "52"



// ---------------------------------
// + with Boolean
// ---------------------------------

console.log("10" + true);       
console.log(typeof ("10" + true)); // string

// Explanation:
// true converted to "true"
// Result = "10true"



// ---------------------------------
// - Operator
// ---------------------------------

console.log("5" - 2);          
console.log(typeof ("5" - 2));  // number

// Explanation:
// "5" converted to number
// Result = 3



// ---------------------------------
// - with Boolean
// ---------------------------------

console.log("10" - true);      
console.log(typeof ("10" - true)); // number

// Explanation:
// true = 1
// 10 - 1 = 9



// ---------------------------------
// * Operator
// ---------------------------------

console.log("5" * 2);          
console.log(typeof ("5" * 2)); // number

// Explanation:
// "5" converted to number
// Result = 10



// ---------------------------------
// / Operator
// ---------------------------------

console.log("10" / 2);         
console.log(typeof ("10" / 2)); // number

// Explanation:
// "10" converted to number
// Result = 5



// ---------------------------------
// true / false Numeric Values
// ---------------------------------

console.log(true + 1);        
console.log(typeof (true + 1)); // number

// Explanation:
// true = 1
// 1 + 1 = 2

console.log(false + 5);       
console.log(typeof (false + 5)); // number

// Explanation:
// false = 0
// 0 + 5 = 5



// ==================================================
// 3️⃣ SPECIAL CASES
// ==================================================

// Empty String

console.log(Number(""));      
console.log(typeof Number("")); // number

// Explanation:
// Empty string becomes 0



console.log(Boolean(""));     
console.log(typeof Boolean("")); // boolean

// Explanation:
// Empty string = false



console.log(Boolean(" "));    
console.log(typeof Boolean(" ")); // boolean

// Explanation:
// Space string has content
// So true



// ==================================================
// 4️⃣ REAL LIFE EXAMPLE
// ==================================================

let inputAge = "25";

let age = Number(inputAge);

console.log(age + 5);        
console.log(typeof age);      // number

// Explanation:
// User input comes as string
// Converted to number for calculation