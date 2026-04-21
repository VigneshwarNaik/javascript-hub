
// Install first in terminal:
// npm install prompt-sync

const prompt = require("prompt-sync")();

// ===============================
// 1. Simple Input
// ===============================
let name = prompt("Enter your name: ");
console.log("Hello " + name);

// ===============================
// 2. Number Input
// ===============================
let age = Number(prompt("Enter your age: "));
console.log("Your age is " + age);

// ===============================
// 3. Addition
// ===============================
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
console.log("Sum =", a + b);

// ===============================
// 4. Subtraction
// ===============================
let x = Number(prompt("Enter first number: "));
let y = Number(prompt("Enter second number: "));
console.log("Subtraction =", x - y);

// ===============================
// 5. Multiplication
// ===============================
let m = Number(prompt("Enter first number: "));
let n = Number(prompt("Enter second number: "));
console.log("Multiplication =", m * n);

// ===============================
// 6. Division
// ===============================
let p = Number(prompt("Enter first number: "));
let q = Number(prompt("Enter second number: "));
console.log("Division =", p / q);

// ===============================
// 7. Even or Odd
// ===============================
let num = Number(prompt("Enter number: "));
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// ===============================
// 8. Positive / Negative
// ===============================
let number = Number(prompt("Enter number: "));
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// ===============================
// 9. Greatest of Two Numbers
// ===============================
let n1 = Number(prompt("Enter first number: "));
let n2 = Number(prompt("Enter second number: "));
if (n1 > n2) {
    console.log(n1 + " is greater");
} else {
    console.log(n2 + " is greater");
}

// ===============================
// 10. Greatest of Three Numbers
// ===============================
let g1 = Number(prompt("Enter first number: "));
let g2 = Number(prompt("Enter second number: "));
let g3 = Number(prompt("Enter third number: "));

if (g1 > g2 && g1 > g3) {
    console.log(g1 + " is greatest");
} else if (g2 > g1 && g2 > g3) {
    console.log(g2 + " is greatest");
} else {
    console.log(g3 + " is greatest");
}

// ===============================
// 11. Voting Eligibility
// ===============================
let voterAge = Number(prompt("Enter age: "));
if (voterAge >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible");
}

// ===============================
// 12. Table Print
// ===============================
let table = Number(prompt("Enter number: "));
for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}

// ===============================
// 13. Factorial
// ===============================
let factNum = Number(prompt("Enter number: "));
let fact = 1;

for (let i = 1; i <= factNum; i++) {
    fact = fact * i;
}
console.log("Factorial =", fact);

// ===============================
// 14. Prime Number
// ===============================
let prime = Number(prompt("Enter number: "));
let isPrime = true;

for (let i = 2; i < prime; i++) {
    if (prime % i === 0) {
        isPrime = false;
        break;
    }
}

if (prime <= 1) {
    console.log("Not Prime");
} else if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

// ===============================
// 15. Calculator using Switch
// ===============================
let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator (+,-,*,/): ");
let num2 = Number(prompt("Enter second number: "));

switch (operator) {
    case "+":
        console.log("Answer =", num1 + num2);
        break;
    case "-":
        console.log("Answer =", num1 - num2);
        break;
    case "*":
        console.log("Answer =", num1 * num2);
        break;
    case "/":
        console.log("Answer =", num1 / num2);
        break;
    default:
        console.log("Invalid Operator");
}

// ===============================
// 16. Password Check
// ===============================
let password = prompt("Enter password: ");

if (password === "12345") {
    console.log("Login Success");
} else {
    console.log("Wrong Password");
}

// ===============================
// 17. Reverse String
// ===============================
let text = prompt("Enter text: ");
let reverse = text.split("").reverse().join("");
console.log("Reverse =", reverse);

// ===============================
// 18. Palindrome
// ===============================
let word = prompt("Enter word: ");
let rev = word.split("").reverse().join("");

if (word === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// ===============================
// 19. Sum of Digits
// ===============================
let digit = prompt("Enter number: ");
let sum = 0;

for (let i = 0; i < digit.length; i++) {
    sum += Number(digit[i]);
}

console.log("Sum =", sum);

// ===============================
// 20. Exit Message
// ===============================
let user = prompt("Enter your name: ");
console.log("Thank you " + user);