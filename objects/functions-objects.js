// ======================================
// JAVASCRIPT FUNCTIONS AS OBJECTS
// FULL CODE EXAMPLES
// ======================================

// In JavaScript functions are objects.
// They can:
// ✔ Have properties
// ✔ Have methods
// ✔ Be stored in variables
// ✔ Be passed as arguments
// ✔ Be returned from functions

// ======================================
// 1. Basic Function
// ======================================
function greet() {
    console.log("Hello");
}

greet();

// ======================================
// 2. Store Function in Variable
// ======================================
let sayHi = greet;

sayHi();

// ======================================
// 3. Function Expression
// ======================================
let add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));

// ======================================
// 4. Arrow Function
// ======================================
let multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// ======================================
// 5. Add Custom Property to Function
// ======================================
function test() {}

test.version = "1.0";
test.author = "Vignesh";

console.log(test.version);
console.log(test.author);

// ======================================
// 6. Delete Function Property
// ======================================
delete test.author;

console.log(test.author);

// ======================================
// 7. Built-in Property: name
// ======================================
function hello() {}

console.log(hello.name);

// ======================================
// 8. Built-in Property: length
// ======================================
function sum(a, b, c) {}

console.log(sum.length);

// ======================================
// 9. Function is Object
// ======================================
function demo() {}

console.log(demo instanceof Object);

// ======================================
// 10. typeof Function
// ======================================
console.log(typeof demo);

// ======================================
// 11. Function as Object Method
// ======================================
let user = {
    name: "Naik",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet();

// ======================================
// 12. Shorthand Method
// ======================================
let car = {
    start() {
        console.log("Car Started");
    }
};

car.start();

// ======================================
// 13. Function as Argument
// ======================================
function run(fn) {
    fn();
}

function welcome() {
    console.log("Welcome");
}

run(welcome);

// ======================================
// 14. Callback Example
// ======================================
function processUser(callback) {
    console.log("Processing...");
    callback();
}

processUser(function () {
    console.log("Done");
});

// ======================================
// 15. Return Function from Function
// ======================================
function outer() {
    return function () {
        console.log("Inner Function");
    };
}

let result = outer();

result();

// ======================================
// 16. Higher Order Function
// ======================================
function calculator(a, b, operation) {
    return operation(a, b);
}

let answer = calculator(5, 3, function (x, y) {
    return x + y;
});

console.log(answer);

// ======================================
// 17. Function Counter Property
// ======================================
function click() {
    click.count++;
    console.log(click.count);
}

click.count = 0;

click();
click();
click();

// ======================================
// 18. call()
// ======================================
function intro(city) {
    console.log(this.name + " from " + city);
}

let person = {
    name: "Vignesh"
};

intro.call(person, "Bangalore");

// ======================================
// 19. apply()
// ======================================
intro.apply(person, ["Mumbai"]);

// ======================================
// 20. bind()
// ======================================
let boundFn = intro.bind(person, "Delhi");

boundFn();

// ======================================
// 21. Constructor Function
// ======================================
function Student(name) {
    this.name = name;
}

let s1 = new Student("Ram");

console.log(s1.name);

// ======================================
// 22. Prototype Property
// ======================================
function Car(model) {
    this.model = model;
}

Car.prototype.start = function () {
    console.log(this.model + " Started");
};

let c1 = new Car("BMW");

c1.start();

// ======================================
// 23. Functions in Array
// ======================================
let arr = [
    function () {
        console.log("One");
    },

    function () {
        console.log("Two");
    }
];

arr[0]();
arr[1]();

// ======================================
// 24. Immediately Invoked Function
// ======================================
(function () {
    console.log("IIFE Running");
})();

// ======================================
// 25. Function Returning Object
// ======================================
function createUser(name) {
    return {
        name: name
    };
}

console.log(createUser("Rahul"));

// ======================================
// 26. Nested Function
// ======================================
function parent() {

    function child() {
        console.log("Child Function");
    }

    child();
}

parent();

// ======================================
// 27. Function with Dynamic Property
// ======================================
function api() {}

api.url = "https://example.com";

console.log(api.url);

// ======================================
// 28. Object.keys on Function
// ======================================
function info() {}

info.version = "2.0";
info.author = "Naik";

console.log(Object.keys(info));

// ======================================
// 29. Freeze Function Object
// ======================================
function app() {}

app.name1 = "JS";

Object.freeze(app);

app.name1 = "Changed";

console.log(app.name1);

// ======================================
// 30. Summary
// ======================================
// Functions are objects because:
// ✔ Properties
// ✔ Methods
// ✔ Prototype
// ✔ Pass/Return
// ✔ Variable storage

// ======================================
// END
// ======================================