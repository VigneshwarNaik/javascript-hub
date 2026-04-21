// ======================================
// JAVASCRIPT SCOPE CHAIN
// IMPORTANT FULL CODE
// ======================================

// Scope Chain:
// JavaScript searches variable from
// current scope -> parent -> global

// ======================================
// 1. Global + Function + Inner Function
// ======================================
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a); // global
        console.log(b); // parent
        console.log(c); // current
    }

    inner();
}

outer();

// ======================================
// 2. Parent Scope Access
// ======================================
function one() {
    let name = "Vignesh";

    function two() {
        console.log(name);
    }

    two();
}

one();

// ======================================
// 3. Global Scope Access
// ======================================
let city = "Bangalore";

function show() {
    function print() {
        console.log(city);
    }

    print();
}

show();

// ======================================
// 4. Variable Shadowing
// ======================================
let x = 100;

function test() {
    let x = 200;

    function demo() {
        let x = 300;

        console.log(x); // nearest variable
    }

    demo();
}

test();

// ======================================
// 5. Inner Uses Parent if No Current
// ======================================
let score = 50;

function game() {
    let score = 80;

    function level() {
        console.log(score);
    }

    level();
}

game();

// ======================================
// 6. If Not Found -> Error
// ======================================
function check() {
    // console.log(data); // ReferenceError
}

check();

// ======================================
// 7. Multiple Nested Scope Chain
// ======================================
let p = 1;

function first() {
    let q = 2;

    function second() {
        let r = 3;

        function third() {
            console.log(p);
            console.log(q);
            console.log(r);
        }

        third();
    }

    second();
}

first();

// ======================================
// 8. Lexical Scope Example
// ======================================
let globalVar = "Global";

function parent() {
    let parentVar = "Parent";

    function child() {
        console.log(globalVar);
        console.log(parentVar);
    }

    child();
}

parent();

// ======================================
// 9. Block Scope + Scope Chain
// ======================================
let user = "Naik";

function login() {
    if (true) {
        let msg = "Welcome";

        console.log(user);
        console.log(msg);
    }
}

login();

// ======================================
// 10. Summary
// ======================================
// Search Order:
// current -> parent -> global

// ======================================
// END
// ======================================