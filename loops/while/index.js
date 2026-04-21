// ======================================
// JAVASCRIPT WHILE LOOP - FULL CODE
// ======================================

// Basic Syntax:
// while(condition){
//     code
// }

// ======================================
// 1. Print 1 to 10
// ======================================
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// ======================================
// 2. Print 10 to 1
// ======================================
let a = 10;

while (a >= 1) {
    console.log(a);
    a--;
}

// ======================================
// 3. Print Even Numbers
// ======================================
let even = 2;

while (even <= 20) {
    console.log(even);
    even += 2;
}

// ======================================
// 4. Print Odd Numbers
// ======================================
let odd = 1;

while (odd <= 20) {
    console.log(odd);
    odd += 2;
}

// ======================================
// 5. Sum of 1 to 10
// ======================================
let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}

console.log("Sum =", sum);

// ======================================
// 6. Multiplication Table
// ======================================
let n = 5;
let x = 1;

while (x <= 10) {
    console.log(n + " x " + x + " = " + (n * x));
    x++;
}

// ======================================
// 7. Factorial
// ======================================
let fact = 1;
let f = 1;

while (f <= 5) {
    fact *= f;
    f++;
}

console.log("Factorial =", fact);

// ======================================
// 8. Reverse Counting
// ======================================
let r = 50;

while (r >= 0) {
    console.log(r);
    r -= 5;
}

// ======================================
// 9. Array Print
// ======================================
let fruits = ["Apple", "Banana", "Mango"];
let index = 0;

while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

// ======================================
// 10. String Characters
// ======================================
let name = "Vignesh";
let j = 0;

while (j < name.length) {
    console.log(name[j]);
    j++;
}

// ======================================
// 11. Break Example
// ======================================
let b = 1;

while (b <= 10) {
    if (b === 6) {
        break;
    }

    console.log(b);
    b++;
}

// ======================================
// 12. Continue Example
// ======================================
let c = 0;

while (c < 10) {
    c++;

    if (c === 5) {
        continue;
    }

    console.log(c);
}

// ======================================
// 13. Prime Number Check
// ======================================
let prime = 7;
let p = 2;
let isPrime = true;

while (p < prime) {
    if (prime % p === 0) {
        isPrime = false;
        break;
    }

    p++;
}

console.log(isPrime ? "Prime" : "Not Prime");

// ======================================
// 14. Fibonacci Series
// ======================================
let first = 0;
let second = 1;
let count = 1;

while (count <= 10) {
    console.log(first);

    let temp = first + second;
    first = second;
    second = temp;

    count++;
}

// ======================================
// 15. Power of Number
// ======================================
let base = 2;
let power = 3;
let result = 1;
let k = 1;

while (k <= power) {
    result *= base;
    k++;
}

console.log(result);

// ======================================
// 16. Sum of Digits
// ======================================
let number = 1234;
let str = number.toString();
let s = 0;
let d = 0;

while (d < str.length) {
    s += Number(str[d]);
    d++;
}

console.log("Sum =", s);

// ======================================
// 17. Nested While Loop Pattern
// ======================================
let row = 1;

while (row <= 5) {
    let col = 1;
    let output = "";

    while (col <= row) {
        output += "* ";
        col++;
    }

    console.log(output);
    row++;
}

// ======================================
// 18. Infinite While Loop (Careful)
// ======================================
// while(true){
//     console.log("Infinite Loop");
// }

// ======================================
// END
// ======================================