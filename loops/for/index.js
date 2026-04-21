// ======================================
// JAVASCRIPT FOR LOOP - ALL POSSIBLE CODE
// ======================================

// Basic Syntax:
// for(initialization; condition; increment/decrement)

// ======================================
// 1. Print 1 to 10
// ======================================
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ======================================
// 2. Print 10 to 1
// ======================================
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// ======================================
// 3. Print Even Numbers 1 to 20
// ======================================
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// ======================================
// 4. Print Odd Numbers 1 to 20
// ======================================
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// ======================================
// 5. Sum of 1 to 10
// ======================================
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum =", sum);

// ======================================
// 6. Multiplication Table
// ======================================
let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// ======================================
// 7. Factorial
// ======================================
let fact = 1;

for (let i = 1; i <= 5; i++) {
    fact *= i;
}
console.log("Factorial =", fact);

// ======================================
// 8. Reverse Counting
// ======================================
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

// ======================================
// 9. Array Loop
// ======================================
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// ======================================
// 10. String Characters
// ======================================
let name = "Vignesh";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// ======================================
// 11. Nested Loop - Square Pattern
// ======================================
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }

    console.log(row);
}

// ======================================
// 12. Triangle Pattern
// ======================================
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

// ======================================
// 13. Reverse Triangle
// ======================================
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

// ======================================
// 14. Break Example
// ======================================
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// ======================================
// 15. Continue Example
// ======================================
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// ======================================
// 16. Prime Number Check
// ======================================
let n = 7;
let isPrime = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime" : "Not Prime");

// ======================================
// 17. Fibonacci Series
// ======================================
let a = 0, b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);

    let temp = a + b;
    a = b;
    b = temp;
}

// ======================================
// 18. Power of Number
// ======================================
let base = 2;
let power = 3;
let result = 1;

for (let i = 1; i <= power; i++) {
    result *= base;
}

console.log(result);

// ======================================
// 19. Sum of Digits
// ======================================
let number = 1234;
let str = number.toString();
let total = 0;

for (let i = 0; i < str.length; i++) {
    total += Number(str[i]);
}

console.log(total);

// ======================================
// 20. Infinite Loop (Careful)
// ======================================
// for(;;){
//     console.log("Infinite");
// }

// ======================================
// END
// ======================================