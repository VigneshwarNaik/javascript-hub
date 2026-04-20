// ===============================
// JavaScript Function
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Function
// ---------------------------------

function greet() {
    console.log("Hello");
}

greet();     // Hello

// Explanation:
// Function created using function keyword
// Call function using name()



// ---------------------------------
// 2️⃣ Function with Parameters
// ---------------------------------

function add(a, b) {
    console.log(a + b);
}

add(10, 20);     // 30
add(5, 7);       // 12



// ---------------------------------
// 3️⃣ Function with Return
// ---------------------------------

function multiply(x, y) {
    return x * y;
}

let result = multiply(5, 4);

console.log(result);   // 20



// ---------------------------------
// 4️⃣ Function Without Return
// ---------------------------------

function test() {
    console.log("Running");
}

let value = test();

console.log(value);    // undefined



// ---------------------------------
// 5️⃣ Default Parameters
// ---------------------------------

function welcome(name = "Guest") {
    console.log("Hello " + name);
}

welcome();          // Hello Guest
welcome("Ram");     // Hello Ram



// ---------------------------------
// 6️⃣ Function Expression
// ---------------------------------

let square = function(n) {
    return n * n;
};

console.log(square(5));   // 25



// ---------------------------------
// 7️⃣ Arrow Function
// ---------------------------------

let sub = (a, b) => a - b;

console.log(sub(20, 5));   // 15



// ---------------------------------
// 8️⃣ One Parameter Arrow Function
// ---------------------------------

let double = n => n * 2;

console.log(double(6));    // 12



// ---------------------------------
// 9️⃣ Multiple Statements Arrow Function
// ---------------------------------

let msg = () => {
    console.log("Welcome");
    console.log("JavaScript");
};

msg();



// ---------------------------------
// 🔟 Anonymous Function
// ---------------------------------

setTimeout(function() {
    console.log("Executed after delay");
}, 1000);



// ---------------------------------
// 1️⃣1️⃣ Callback Function
// ---------------------------------

function processUser(callback) {
    callback();
}

processUser(function() {
    console.log("Callback Called");
});



// ---------------------------------
// 1️⃣2️⃣ Recursive Function
// ---------------------------------

function countDown(n) {
    if (n === 0) return;

    console.log(n);
    countDown(n - 1);
}

countDown(3);

// 3
// 2
// 1



// ---------------------------------
// 1️⃣3️⃣ Function Scope
// ---------------------------------

function demo() {
    let a = 100;
    console.log(a);
}

demo(); // 100

// console.log(a); Error



// ---------------------------------
// 1️⃣4️⃣ Real Life Example
// ---------------------------------

function login(username) {
    console.log(username + " logged in");
}

login("Vigneshwar");



// ---------------------------------
// 1️⃣5️⃣ typeof Function
// ---------------------------------

function test2() {}

console.log(typeof test2);   // function



// ---------------------------------
// 1️⃣6️⃣ Best Practice
// ---------------------------------

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("Vigneshwar", "Naik"));