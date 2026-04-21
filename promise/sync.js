// ======================================
// JAVASCRIPT PROMISES
// FULL IMPORTANT CODE
// ======================================

// Promise = Future result of async task
// States:
// pending
// fulfilled
// rejected

// ======================================
// 1. Basic Promise Resolve
// ======================================
let p1 = new Promise((resolve, reject) => {
    resolve("Success");
});

p1.then((msg) => {
    console.log(msg);
});

// ======================================
// 2. Basic Promise Reject
// ======================================
let p2 = new Promise((resolve, reject) => {
    reject("Failed");
});

p2.catch((err) => {
    console.log(err);
});

// ======================================
// 3. then + catch
// ======================================
let p3 = new Promise((resolve, reject) => {
    let status = true;

    if (status) {
        resolve("Login Success");
    } else {
        reject("Login Failed");
    }
});

p3
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

// ======================================
// 4. finally()
// ======================================
let p4 = new Promise((resolve) => {
    resolve("Done");
});

p4
.then((msg) => {
    console.log(msg);
})
.finally(() => {
    console.log("Always Runs");
});

// ======================================
// 5. Promise with setTimeout
// ======================================
let p5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

p5.then((data) => {
    console.log(data);
});

// ======================================
// 6. Promise Chaining
// ======================================
Promise.resolve(5)
.then((num) => {
    return num * 2;
})
.then((num) => {
    return num + 10;
})
.then((result) => {
    console.log(result);
});

// ======================================
// 7. Returning Promise in Chain
// ======================================
function step1() {
    return Promise.resolve("Step 1");
}

function step2() {
    return Promise.resolve("Step 2");
}

step1()
.then((msg) => {
    console.log(msg);
    return step2();
})
.then((msg) => {
    console.log(msg);
});

// ======================================
// 8. Promise.reject()
// ======================================
Promise.reject("Custom Error")
.catch((err) => {
    console.log(err);
});

// ======================================
// 9. Promise.resolve()
// ======================================
Promise.resolve("Instant Success")
.then((msg) => {
    console.log(msg);
});

// ======================================
// 10. Promise.all()
// ======================================
let a = Promise.resolve("One");
let b = Promise.resolve("Two");
let c = Promise.resolve("Three");

Promise.all([a, b, c])
.then((data) => {
    console.log(data);
});

// ======================================
// 11. Promise.race()
// ======================================
let fast = new Promise((resolve) =>
    setTimeout(() => resolve("Fast"), 1000)
);

let slow = new Promise((resolve) =>
    setTimeout(() => resolve("Slow"), 3000)
);

Promise.race([fast, slow])
.then((winner) => {
    console.log(winner);
});

// ======================================
// 12. Promise.allSettled()
// ======================================
let p6 = Promise.resolve("Success");
let p7 = Promise.reject("Fail");

Promise.allSettled([p6, p7])
.then((result) => {
    console.log(result);
});

// ======================================
// 13. Promise.any()
// ======================================
let fail1 = Promise.reject("Error 1");
let pass1 = Promise.resolve("First Success");

Promise.any([fail1, pass1])
.then((msg) => {
    console.log(msg);
});

// ======================================
// 14. Fake API Call
// ======================================
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Vignesh",
                age: 22
            });
        }, 2000);
    });
}

fetchUser()
.then((user) => {
    console.log(user);
});

// ======================================
// 15. Conditional Promise
// ======================================
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

// ======================================
// 16. Error Throw in then()
// ======================================
Promise.resolve("Start")
.then((msg) => {
    console.log(msg);
    throw "Something Wrong";
})
.catch((err) => {
    console.log(err);
});

// ======================================
// 17. Nested Promise (Avoid)
// ======================================
Promise.resolve("Outer")
.then((msg) => {
    console.log(msg);

    Promise.resolve("Inner")
    .then((msg2) => {
        console.log(msg2);
    });
});

// ======================================
// 18. Loading Example
// ======================================
console.log("Loading...");

new Promise((resolve) => {
    setTimeout(() => {
        resolve("Loaded");
    }, 3000);
})
.then((msg) => {
    console.log(msg);
});

// ======================================
// 19. Order Example
// ======================================
function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Delivered");
        }, 2000);
    });
}

orderFood()
.then((msg) => {
    console.log(msg);
});

// ======================================
// 20. Summary
// ======================================
// Important Methods:
// then()
// catch()
// finally()
// Promise.resolve()
// Promise.reject()
// Promise.all()
// Promise.race()

// ======================================
// END
// ======================================