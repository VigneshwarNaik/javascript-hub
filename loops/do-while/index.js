// ======================================
// JAVASCRIPT DO WHILE LOOP - FULL CODE
// ======================================

// Basic Syntax:
// do {
//     code
// } while(condition);

// Note:
// do while loop executes at least one time.

// ======================================
// 1. Print 1 to 10
// ======================================
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

// ======================================
// 2. Print 10 to 1
// ======================================
let a = 10;

do {
    console.log(a);
    a--;
} while (a >= 1);

// ======================================
// 3. Print Even Numbers
// ======================================
let even = 2;

do {
    console.log(even);
    even += 2;
} while (even <= 20);

// ======================================
// 4. Print Odd Numbers
// ======================================
let odd = 1;

do {
    console.log(odd);
    odd += 2;
} while (odd <= 20);

// ======================================
// 5. Sum of 1 to 10
// ======================================
let num = 1;
let sum = 0;

do {
    sum += num;
    num++;
} while (num <= 10);

console.log("Sum =", sum);

// ======================================
// 6. Multiplication Table
// ======================================
let n = 5;
let x = 1;

do {
    console.log(n + " x " + x + " = " + (n * x));
    x++;
} while (x <= 10);

// ======================================
// 7. Factorial
// ======================================
let fact = 1;
let f = 1;

do {
    fact *= f;
    f++;
} while (f <= 5);

console.log("Factorial =", fact);

// ======================================
// 8. Reverse Counting
// ======================================
let r = 50;

do {
    console.log(r);
    r -= 5;
} while (r >= 0);

// ======================================
// 9. Array Print
// ======================================
let fruits = ["Apple", "Banana", "Mango"];
let index = 0;

do {
    console.log(fruits[index]);
    index++;
} while (index < fruits.length);

// ======================================
// 10. String Characters
// ======================================
let name = "Vignesh";
let j = 0;

do {
    console.log(name[j]);
    j++;
} while (j < name.length);

// ======================================
// 11. Break Example
// ======================================
let b = 1;

do {
    if (b === 6) {
        break;
    }

    console.log(b);
    b++;
} while (b <= 10);

// ======================================
// 12. Continue Example
// ======================================
let c = 0;

do {
    c++;

    if (c === 5) {
        continue;
    }

    console.log(c);
} while (c < 10);

// ======================================
// 13. Prime Number Check
// ======================================
let prime = 7;
let p = 2;
let isPrime = true;

do {
    if (prime % p === 0) {
        isPrime = false;
        break;
    }

    p++;
} while (p < prime);

console.log(isPrime ? "Prime" : "Not Prime");

// ======================================
// 14. Fibonacci Series
// ======================================
let first = 0;
let second = 1;
let count = 1;

do {
    console.log(first);

    let temp = first + second;
    first = second;
    second = temp;

    count++;
} while (count <= 10);

// ======================================
// 15. Power of Number
// ======================================
let base = 2;
let power = 3;
let result = 1;
let k = 1;

do {
    result *= base;
    k++;
} while (k <= power);

console.log(result);

// ======================================
// 16. Sum of Digits
// ======================================
let number = 1234;
let str = number.toString();
let s = 0;
let d = 0;

do {
    s += Number(str[d]);
    d++;
} while (d < str.length);

console.log("Sum =", s);

// ======================================
// 17. Nested do while Pattern
// ======================================
let row = 1;

do {
    let col = 1;
    let output = "";

    do {
        output += "* ";
        col++;
    } while (col <= row);

    console.log(output);
    row++;
} while (row <= 5);

// ======================================
// 18. Executes Once Even False
// ======================================
let z = 100;

do {
    console.log("Runs once");
} while (z < 10);

// ======================================
// 19. Infinite do while (Careful)
// ======================================
// do {
//     console.log("Infinite");
// } while(true);

// ======================================
// END
// ======================================