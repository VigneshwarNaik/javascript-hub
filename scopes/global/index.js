// ======================================
// JAVASCRIPT GLOBAL SCOPE 
// ======================================

// Global Scope = Variable declared outside
// all functions and blocks.
// Accessible anywhere in program.

// ======================================
// 1. Basic Global Variable
// ======================================
let name = "Vignesh";

console.log(name); // Vignesh

function showName() {
    console.log(name);
}

showName();

// ======================================
// 2. Global var Variable
// ======================================
var city = "Bangalore";

console.log(city);

function showCity() {
    console.log(city);
}

showCity();

// ======================================
// 3. Global const Variable
// ======================================
const country = "India";

console.log(country);

function showCountry() {
    console.log(country);
}

showCountry();

// ======================================
// 4. Global Variable Inside Function Use
// ======================================
let age = 22;

function printAge() {
    console.log("Age =", age);
}

printAge();

// ======================================
// 5. Modify Global Variable
// ======================================
let score = 50;

function updateScore() {
    score = 100;
}

updateScore();

console.log(score); // 100

// ======================================
// 6. Global Variable Used in Multiple Functions
// ======================================
let user = "Naik";

function greet() {
    console.log("Hello " + user);
}

function welcome() {
    console.log("Welcome " + user);
}

greet();
welcome();

// ======================================
// 7. Global Array
// ======================================
let fruits = ["Apple", "Banana", "Mango"];

function showFruits() {
    console.log(fruits);
}

showFruits();

// ======================================
// 8. Global Object
// ======================================
let person = {
    name: "Vignesh",
    age: 22
};

function showPerson() {
    console.log(person.name);
    console.log(person.age);
}

showPerson();

// ======================================
// 9. Global Scope + Block Access
// ======================================
let language = "JavaScript";

if (true) {
    console.log(language);
}

// ======================================
// 10. Global Scope + Loop Access
// ======================================
let msg = "Loop Running";

for (let i = 1; i <= 3; i++) {
    console.log(msg);
}

// ======================================
// 11. Global Variable Shadowing
// ======================================
let x = 10;

function test() {
    let x = 20;
    console.log("Inside =", x);
}

test();

console.log("Outside =", x);

// ======================================
// 12. Global var Becomes Window Object (Browser)
// ======================================
// var a = 100;
// console.log(window.a);

// ======================================
// 13. Implicit Global Variable (Bad Practice)
// ======================================
// function bad() {
//     data = 500;
// }
// bad();
// console.log(data);

// ======================================
// 14. Nested Functions Access Global
// ======================================
let company = "OpenAI";

function outer() {

    function inner() {
        console.log(company);
    }

    inner();
}

outer();

// ======================================
// 15. Change Global Array
// ======================================
let numbers = [1, 2, 3];

function addNumber() {
    numbers.push(4);
}

addNumber();

console.log(numbers);

// ======================================
// 16. Global Constant Object Editable
// ======================================
const student = {
    name: "Ram"
};

student.name = "Shyam";

console.log(student);

// ======================================
// 17. Global Scope in setTimeout
// ======================================
let text = "Hello World";

setTimeout(function () {
    console.log(text);
}, 1000);

// ======================================
// 18. Global Scope in Arrow Function
// ======================================
let app = "JS App";

const showApp = () => {
    console.log(app);
};

showApp();

// ======================================
// 19. Best Practice Example
// ======================================
const APP_NAME = "My Project";

function start() {
    console.log(APP_NAME + " Started");
}

start();

// ======================================
// 20. Summary
// ======================================
// Global variables can be accessed:
// ✔ Functions
// ✔ Blocks
// ✔ Loops
// ✔ Nested functions
// ✔ Anywhere after declaration

// ======================================
// END
// ======================================