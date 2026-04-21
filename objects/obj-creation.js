// ======================================
// JAVASCRIPT OBJECT CREATION - FULL CODE
// All Possible Important Methods
// ======================================

// ======================================
// 1. Object Literal (Most Common)
// ======================================
let person = {
    name: "Vignesh",
    age: 22,
    city: "Bangalore"
};

console.log(person);

// ======================================
// 2. Empty Object then Add Properties
// ======================================
let car = {};

car.brand = "BMW";
car.model = "X5";
car.price = 5000000;

console.log(car);

// ======================================
// 3. new Object()
// ======================================
let mobile = new Object();

mobile.brand = "Samsung";
mobile.model = "S24";
mobile.price = 70000;

console.log(mobile);

// ======================================
// 4. Constructor Function
// ======================================
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

let s1 = new Student("Ram", 21, "MCA");
let s2 = new Student("Rahul", 22, "BCA");

console.log(s1);
console.log(s2);

// ======================================
// 5. Constructor with Method
// ======================================
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.show = function () {
        console.log(this.name + " " + this.salary);
    };
}

let e1 = new Employee("Vignesh", 50000);

e1.show();

// ======================================
// 6. ES6 Class Object Creation
// ======================================
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let u1 = new User("Naik", 23);

console.log(u1);
u1.greet();

// ======================================
// 7. Object.create()
// ======================================
let parent = {
    greet() {
        console.log("Hello from parent");
    }
};

let child = Object.create(parent);

child.name = "Child";

console.log(child.name);
child.greet();

// ======================================
// 8. Dynamic Property Names
// ======================================
let key = "color";

let bike = {
    [key]: "Red",
    brand: "Yamaha"
};

console.log(bike);

// ======================================
// 9. Nested Object Creation
// ======================================
let student = {
    name: "Ajay",

    address: {
        city: "Bangalore",
        pin: 560001
    }
};

console.log(student);

// ======================================
// 10. Array of Objects
// ======================================
let users = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 22 }
];

console.log(users);

// ======================================
// 11. Object with Methods
// ======================================
let account = {
    name: "Vignesh",
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    show() {
        console.log(this.balance);
    }
};

account.deposit(500);
account.show();

// ======================================
// 12. Factory Function
// ======================================
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let user1 = createUser("Ram", 24);

console.log(user1);

// ======================================
// 13. Shorthand Property
// ======================================
let title = "JS Book";
let price = 500;

let book = {
    title,
    price
};

console.log(book);

// ======================================
// 14. Shorthand Method
// ======================================
let app = {
    start() {
        console.log("App Started");
    }
};

app.start();

// ======================================
// 15. Object from Existing Object
// ======================================
let original = {
    a: 1,
    b: 2
};

let copy = { ...original };

console.log(copy);

// ======================================
// 16. Object.assign()
// ======================================
let obj1 = { x: 1 };
let obj2 = { y: 2 };

let merged = Object.assign({}, obj1, obj2);

console.log(merged);

// ======================================
// 17. Create Frozen Object
// ======================================
let data = {
    name: "Test"
};

Object.freeze(data);

console.log(data);

// ======================================
// 18. Create Sealed Object
// ======================================
let item = {
    product: "Watch"
};

Object.seal(item);

console.log(item);

// ======================================
// 19. Object with Function Property
// ======================================
let machine = {
    start: function () {
        console.log("Machine Started");
    }
};

machine.start();

// ======================================
// 20. Object Using JSON Style
// ======================================
let apiData = {
    "userName": "Vignesh",
    "score": 95
};

console.log(apiData);

// ======================================
// 21. Date Object
// ======================================
let today = new Date();

console.log(today);

// ======================================
// 22. RegExp Object
// ======================================
let pattern = new RegExp("abc");

console.log(pattern);

// ======================================
// 23. Map Object
// ======================================
let map = new Map();

map.set("name", "Naik");

console.log(map);

// ======================================
// 24. Set Object
// ======================================
let set = new Set([1, 2, 3]);

console.log(set);

// ======================================
// 25. Function Object
// ======================================
function test() {}

test.version = "1.0";

console.log(test.version);

// ======================================
// 26. Optional Chaining Object
// ======================================
let company = {
    employee: {
        name: "Ravi"
    }
};

console.log(company.employee?.name);

// ======================================
// 27. Destructuring Object
// ======================================
let laptop = {
    brand: "HP",
    ram: "16GB"
};

let { brand, ram } = laptop;

console.log(brand, ram);

// ======================================
// 28. Prototype Based Create
// ======================================
let animal = {
    eat() {
        console.log("Eating");
    }
};

let dog = Object.create(animal);

dog.eat();

// ======================================
// 29. Full Summary
// ======================================
// Create Objects Using:
// {}
// new Object()
// Constructor Function
// class
// Object.create()
// Factory Function
// Object.assign()
// Spread Operator

// ======================================
// 30. END
// ======================================