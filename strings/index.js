// ======================================
// JAVASCRIPT STRINGS - FULL CODE
// Important Concepts + Methods
// ======================================

// String = Text data

// ======================================
// 1. Basic String
// ======================================
let name = "Vignesh";

console.log(name);
console.log(typeof name);

// ======================================
// 2. Single Quotes
// ======================================
let city = 'Bangalore';

console.log(city);

// ======================================
// 3. Template Literal
// ======================================
let user = "Naik";

console.log(`Hello ${user}`);

// ======================================
// 4. String Length
// ======================================
let text = "JavaScript";

console.log(text.length);

// ======================================
// 5. Access Characters
// ======================================
console.log(text[0]); // J
console.log(text[4]); // S

// ======================================
// 6. charAt()
// ======================================
console.log(text.charAt(1));

// ======================================
// 7. toUpperCase()
// ======================================
console.log(text.toUpperCase());

// ======================================
// 8. toLowerCase()
// ======================================
console.log(text.toLowerCase());

// ======================================
// 9. trim()
// ======================================
let msg = "   Hello World   ";

console.log(msg.trim());

// ======================================
// 10. slice()
// ======================================
console.log(text.slice(0, 4));
console.log(text.slice(-6));

// ======================================
// 11. substring()
// ======================================
console.log(text.substring(0, 4));

// ======================================
// 12. replace()
// ======================================
let line = "I love Java";

console.log(line.replace("Java", "JS"));

// ======================================
// 13. replaceAll()
// ======================================
let words = "hi hi hi";

console.log(words.replaceAll("hi", "hello"));

// ======================================
// 14. includes()
// ======================================
console.log(text.includes("Script"));
console.log(text.includes("Python"));

// ======================================
// 15. startsWith()
// ======================================
console.log(text.startsWith("Java"));

// ======================================
// 16. endsWith()
// ======================================
console.log(text.endsWith("Script"));

// ======================================
// 17. indexOf()
// ======================================
console.log(text.indexOf("a"));

// ======================================
// 18. lastIndexOf()
// ======================================
let str = "banana";

console.log(str.lastIndexOf("a"));

// ======================================
// 19. concat()
// ======================================
let first = "Hello";
let second = "World";

console.log(first.concat(" ", second));

// ======================================
// 20. + Operator
// ======================================
console.log(first + " " + second);

// ======================================
// 21. repeat()
// ======================================
console.log("Hi ".repeat(3));

// ======================================
// 22. split()
// ======================================
let sentence = "HTML CSS JS";

console.log(sentence.split(" "));

// ======================================
// 23. Join After Split
// ======================================
let arr = sentence.split(" ");

console.log(arr.join("-"));

// ======================================
// 24. String to Array
// ======================================
console.log("hello".split(""));

// ======================================
// 25. Reverse String
// ======================================
let word = "hello";

let reversed = word.split("").reverse().join("");

console.log(reversed);

// ======================================
// 26. Check Empty String
// ======================================
let input = "";

console.log(input.length === 0);

// ======================================
// 27. Compare Strings
// ======================================
console.log("apple" === "apple");
console.log("apple" === "Apple");

// ======================================
// 28. Convert Number to String
// ======================================
let num = 123;

console.log(String(num));
console.log(num.toString());

// ======================================
// 29. Escape Characters
// ======================================
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("He said \"Hi\"");

// ======================================
// 30. Multiline String
// ======================================
let multi = `Line 1
Line 2
Line 3`;

console.log(multi);

// ======================================
// 31. Search Method
// ======================================
console.log(text.search("Script"));

// ======================================
// 32. match()
// ======================================
let data = "abc123xyz";

console.log(data.match(/[0-9]+/));

// ======================================
// 33. padStart()
// ======================================
console.log("5".padStart(3, "0"));

// ======================================
// 34. padEnd()
// ======================================
console.log("5".padEnd(3, "0"));

// ======================================
// 35. Character Unicode
// ======================================
console.log(text.charCodeAt(0));

// ======================================
// 36. fromCharCode()
// ======================================
console.log(String.fromCharCode(65));

// ======================================
// 37. Real Life Example
// ======================================
let email = "user@gmail.com";

console.log(email.includes("@"));

// ======================================
// 38. Palindrome Check
// ======================================
let p = "madam";

let rev = p.split("").reverse().join("");

console.log(p === rev);

// ======================================
// 39. Count Characters
// ======================================
let countText = "banana";

console.log(countText.length);

// ======================================
// 40. Summary
// ======================================
// Important Methods:
// length
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// replace()
// includes()
// split()
// join()

// ======================================
// END
// ======================================