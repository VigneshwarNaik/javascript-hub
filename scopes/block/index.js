// ======================================
// JAVASCRIPT BLOCK SCOPE - FULL CODE
// ======================================

// Block Scope = Variables declared with
// let and const inside { } only work
// inside that block.

// Blocks:
// if, for, while, switch, { }

// ======================================
// 1. Basic Block Scope
// ======================================
{
    let name = "Vignesh";
    console.log(name);
}

// console.log(name); // Error

// ======================================
// 2. const in Block Scope
// ======================================
{
    const city = "Bangalore";
    console.log(city);
}

// console.log(city); // Error

// ======================================
// 3. if Block Scope
// ======================================
if (true) {
    let age = 22;
    console.log(age);
}

// console.log(age); // Error

// ======================================
// 4. for Loop Block Scope
// ======================================
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// console.log(i); // Error

// ======================================
// 5. while Loop Block Scope
// ======================================
let x = 1;

while (x <= 3) {
    let msg = "Hello";
    console.log(msg);
    x++;
}

// console.log(msg); // Error

// ======================================
// 6. Nested Block Scope
// ======================================
{
    let a = 10;

    {
        let b = 20;
        console.log(a);
        console.log(b);
    }

    // console.log(b); // Error
}

// ======================================
// 7. Outer Variable Access Inside Block
// ======================================
let user = "Naik";

{
    console.log(user);
}

// ======================================
// 8. Block Scope Shadowing
// ======================================
let score = 50;

{
    let score = 100;
    console.log("Inside =", score);
}

console.log("Outside =", score);

// ======================================
// 9. var is NOT Block Scope
// ======================================
if (true) {
    var data = "Visible Outside";
}

console.log(data);

// ======================================
// 10. Switch Block Scope
// ======================================
let day = 1;

switch (day) {
    case 1: {
        let msg = "Monday";
        console.log(msg);
        break;
    }

    case 2: {
        let msg = "Tuesday";
        console.log(msg);
        break;
    }
}

// ======================================
// 11. Block Scope with Array
// ======================================
{
    let fruits = ["Apple", "Banana"];
    console.log(fruits);
}

// console.log(fruits); // Error

// ======================================
// 12. Block Scope with Object
// ======================================
{
    const person = {
        name: "Vignesh",
        age: 22
    };

    console.log(person.name);
}

// ======================================
// 13. const Object Editable
// ======================================
{
    const student = {
        name: "Ram"
    };

    student.name = "Shyam";

    console.log(student);
}

// ======================================
// 14. if else Separate Blocks
// ======================================
let marks = 80;

if (marks >= 35) {
    let result = "Pass";
    console.log(result);
} else {
    let result = "Fail";
    console.log(result);
}

// ======================================
// 15. Loop New Variable Every Time
// ======================================
for (let j = 1; j <= 3; j++) {
    let temp = j * 10;
    console.log(temp);
}

// ======================================
// 16. Empty Block Scope
// ======================================
{
    let test = "Only Here";
    console.log(test);
}

// ======================================
// 17. Block Scope in Function
// ======================================
function demo() {
    if (true) {
        let inside = "Block + Function";
        console.log(inside);
    }
}

demo();

// ======================================
// 18. Best Practice
// ======================================
{
    const APP_NAME = "My App";
    console.log(APP_NAME);
}

// ======================================
// 19. Summary
// ======================================
// let / const inside { }:
// ✔ Works inside block
// ✔ Safe from outside access
// ✔ Helps avoid conflicts

// var:
// ✘ Not block scoped

// ======================================
// 20. END
// ======================================