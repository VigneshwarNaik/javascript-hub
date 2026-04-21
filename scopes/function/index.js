// ======================================
// JAVASCRIPT FUNCTION SCOPE 
// ======================================

// Function Scope = Variable declared inside
// a function can be used ONLY inside that function.

// ======================================
// 1. Basic Function Scope
// ======================================
function demo() {
    let name = "Vignesh";
    console.log(name);
}

demo();

// console.log(name); // Error

// ======================================
// 2. var inside Function Scope
// ======================================
function testVar() {
    var age = 22;
    console.log(age);
}

testVar();

// console.log(age); // Error

// ======================================
// 3. const inside Function Scope
// ======================================
function testConst() {
    const city = "Bangalore";
    console.log(city);
}

testConst();

// console.log(city); // Error

// ======================================
// 4. Function Scope with Calculation
// ======================================
function add() {
    let a = 10;
    let b = 20;
    let sum = a + b;

    console.log("Sum =", sum);
}

add();

// ======================================
// 5. Same Variable Name in Different Functions
// ======================================
function one() {
    let x = 10;
    console.log("One =", x);
}

function two() {
    let x = 20;
    console.log("Two =", x);
}

one();
two();

// ======================================
// 6. Function Scope hides Outside Access
// ======================================
function hidden() {
    let password = "12345";
    console.log("Inside =", password);
}

hidden();

// console.log(password); // Error

// ======================================
// 7. Function Scope + Return Value
// ======================================
function multiply() {
    let a = 5;
    let b = 4;

    return a * b;
}

console.log(multiply());

// ======================================
// 8. Function Scope with Input
// ======================================
function greet(user) {
    let msg = "Hello " + user;

    console.log(msg);
}

greet("Naik");

// ======================================
// 9. Nested Function Scope
// ======================================
function outer() {
    let outerVar = "Outer";

    function inner() {
        console.log(outerVar);
    }

    inner();
}

outer();

// ======================================
// 10. Inner Variable Not Outside
// ======================================
function sample() {
    let a = 100;

    function child() {
        let b = 200;
        console.log(a);
        console.log(b);
    }

    child();

    // console.log(b); // Error
}

sample();

// ======================================
// 11. Function Scope with Loop
// ======================================
function loopTest() {
    for (let i = 1; i <= 3; i++) {
        console.log(i);
    }
}

loopTest();

// ======================================
// 12. Function Scope with Array
// ======================================
function fruitsData() {
    let fruits = ["Apple", "Banana"];

    console.log(fruits);
}

fruitsData();

// ======================================
// 13. Function Scope with Object
// ======================================
function personData() {
    let person = {
        name: "Vignesh",
        age: 22
    };

    console.log(person.name);
}

personData();

// ======================================
// 14. Local Variable Shadows Global
// ======================================
let user = "Global User";

function login() {
    let user = "Local User";

    console.log(user);
}

login();

console.log(user);

// ======================================
// 15. Function Scope in Arrow Function
// ======================================
const show = () => {
    let app = "JavaScript";

    console.log(app);
};

show();

// ======================================
// 16. Function Scope in Function Expression
// ======================================
const run = function () {
    let speed = 100;

    console.log(speed);
};

run();

// ======================================
// 17. Variable Destroyed After Function End
// ======================================
function temp() {
    let data = "Temporary";

    console.log(data);
}

temp();

// console.log(data); // Error

// ======================================
// 18. Counter Example
// ======================================
function counter() {
    let count = 0;

    count++;
    console.log(count);
}

counter();
counter();
counter();

// Each time new local variable created

// ======================================
// 19. Best Practice
// ======================================
function startProject() {
    let status = "Started";

    console.log(status);
}

startProject();

// ======================================
// 20. Summary
// ======================================
// Function scope variables:
// ✔ Work only inside function
// ✔ Cannot access outside
// ✔ Safe and private
// ✔ Created when function runs

// ======================================
// END
// ======================================