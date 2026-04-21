// ======================================
// JAVASCRIPT ASYNCHRONOUS JS
// FULL IMPORTANT CODE
// ======================================

// Async JS = Non-blocking code execution

// ======================================
// 1. Synchronous Example
// ======================================
console.log("Start");
console.log("Middle");
console.log("End");

// ======================================
// 2. setTimeout Basic
// ======================================
console.log("Before");

setTimeout(function () {
    console.log("Runs after 2 seconds");
}, 2000);

console.log("After");

// ======================================
// 3. setTimeout Arrow Function
// ======================================
setTimeout(() => {
    console.log("Arrow Timeout");
}, 1000);

// ======================================
// 4. setInterval
// ======================================
let count = 0;

let timer = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 3) {
        clearInterval(timer);
    }
}, 1000);

// ======================================
// 5. Callback Example
// ======================================
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Finished");
}

greet("Vignesh", done);

// ======================================
// 6. Async Callback
// ======================================
setTimeout(() => {
    console.log("Async Callback");
}, 1500);

// ======================================
// 7. Callback Hell Example
// ======================================
setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);

// ======================================
// 8. Promise Basic
// ======================================
let promise1 = new Promise((resolve, reject) => {
    resolve("Success");
});

promise1.then((msg) => {
    console.log(msg);
});

// ======================================
// 9. Promise Reject
// ======================================
let promise2 = new Promise((resolve, reject) => {
    reject("Failed");
});

promise2
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

// ======================================
// 10. Promise with Timeout
// ======================================
let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

promise3.then((data) => {
    console.log(data);
});

// ======================================
// 11. Chained Promise
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
// 12. async Function
// ======================================
async function hello() {
    return "Hello Async";
}

hello().then((msg) => {
    console.log(msg);
});

// ======================================
// 13. await Example
// ======================================
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Data");
        }, 2000);
    });
}

async function fetchData() {
    let result = await getData();

    console.log(result);
}

fetchData();

// ======================================
// 14. try catch with async
// ======================================
function getError() {
    return new Promise((resolve, reject) => {
        reject("Server Error");
    });
}

async function run() {
    try {
        let res = await getError();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

run();

// ======================================
// 15. Promise.all
// ======================================
let p1 = Promise.resolve("One");
let p2 = Promise.resolve("Two");
let p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
.then((data) => {
    console.log(data);
});

// ======================================
// 16. Promise.race
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
// 17. Simulated API Call
// ======================================
function fakeAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Vignesh",
                age: 22
            });
        }, 2000);
    });
}

async function getUser() {
    let user = await fakeAPI();

    console.log(user);
}

getUser();

// ======================================
// 18. Loading Example
// ======================================
console.log("Loading...");

setTimeout(() => {
    console.log("Loaded");
}, 3000);

// ======================================
// 19. Execution Order Example
// ======================================
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

// Output:
// A
// C
// B

// ======================================
// 20. Summary
// ======================================
// Async Tools:
// ✔ setTimeout
// ✔ setInterval
// ✔ Callback
// ✔ Promise
// ✔ async / await

// ======================================
// END
// ======================================