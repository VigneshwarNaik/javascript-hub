// ===============================
// JavaScript Object Data Type
// Full Code Examples
// ===============================


// ---------------------------------
// 1️⃣ Basic Object
// ---------------------------------

let a = {
    name: "Vigneshwar",
    age: 24
};

console.log(a);
// Output: { name: 'Vigneshwar', age: 24 }

console.log(typeof a);
// Output: object



// ---------------------------------
// 2️⃣ Access Object Values
// ---------------------------------

console.log(a.name);       // Vigneshwar
console.log(a.age);        // 24

// Dot notation



// ---------------------------------
// 3️⃣ Bracket Notation
// ---------------------------------

console.log(a["name"]);    // Vigneshwar
console.log(a["age"]);     // 24



// ---------------------------------
// 4️⃣ Add New Property
// ---------------------------------

a.city = "Bangalore";

console.log(a);

// Output:
// { name: 'Vigneshwar', age: 24, city: 'Bangalore' }



// ---------------------------------
// 5️⃣ Update Property
// ---------------------------------

a.age = 25;

console.log(a.age);        // 25



// ---------------------------------
// 6️⃣ Delete Property
// ---------------------------------

delete a.city;

console.log(a);



// ---------------------------------
// 7️⃣ Nested Object
// ---------------------------------

let b = {
    name: "Ram",
    address: {
        city: "Mysore",
        pin: 570001
    }
};

console.log(b.address.city);   // Mysore
console.log(b.address.pin);    // 570001



// ---------------------------------
// 8️⃣ Object with Function (Method)
// ---------------------------------

let c = {
    name: "John",

    greet: function () {
        console.log("Hello");
    }
};

c.greet();     // Hello



// ---------------------------------
// 9️⃣ Array Inside Object
// ---------------------------------

let d = {
    name: "Vicky",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(d.skills[0]);   // HTML
console.log(d.skills[2]);   // JavaScript



// ---------------------------------
// 🔟 Object.keys()
// ---------------------------------

console.log(Object.keys(d));

// Output:
// [ 'name', 'skills' ]



// ---------------------------------
// 1️⃣1️⃣ Object.values()
// ---------------------------------

console.log(Object.values(d));

// Output:
// [ 'Vicky', [ 'HTML', 'CSS', 'JavaScript' ] ]



// ---------------------------------
// 1️⃣2️⃣ for...in Loop
// ---------------------------------

for (let key in a) {
    console.log(key, a[key]);
}



// ---------------------------------
// 1️⃣3️⃣ Compare Objects
// ---------------------------------

let e = { name: "Sam" };
let f = { name: "Sam" };

console.log(e == f);     // false
console.log(e === f);    // false

// Different memory references



// ---------------------------------
// 1️⃣4️⃣ Object Assign
// ---------------------------------

let g = Object.assign({}, a);

console.log(g);



// ---------------------------------
// 1️⃣5️⃣ Real Life Example
// ---------------------------------

let student = {
    id: 101,
    name: "Rahul",
    marks: 90,
    passed: true
};

console.log(student.name);   // Rahul
console.log(student.passed); // true



// ---------------------------------
// 1️⃣6️⃣ Best Practice
// ---------------------------------

let user = {
    firstName: "Vigneshwar",
    isLoggedIn: true
};

if (typeof user === "object") {
    console.log("Object Created");
}