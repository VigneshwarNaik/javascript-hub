// ======================================
// JAVASCRIPT ASYNC / AWAIT
// FULL IMPORTANT CODE
// ======================================

// await can be used only inside async function
// await pauses until Promise completes

// ======================================
// 1. Basic async Function
// ======================================
async function hello() {
    return "Hello";
}

hello().then((msg) => {
    console.log(msg);
});

// ======================================
// 2. Basic await
// ======================================
function getData() {
    return Promise.resolve("Data Loaded");
}

async function showData() {
    let result = await getData();

    console.log(result);
}

showData();

// ======================================
// 3. await with setTimeout Promise
// ======================================
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Data");
        }, 2000);
    });
}

async function userInfo() {
    console.log("Loading...");

    let user = await fetchUser();

    console.log(user);
}

userInfo();

// ======================================
// 4. Multiple await
// ======================================
function firstTask() {
    return Promise.resolve("Task 1");
}

function secondTask() {
    return Promise.resolve("Task 2");
}

async function runTasks() {
    let a = await firstTask();
    let b = await secondTask();

    console.log(a);
    console.log(b);
}

runTasks();

// ======================================
// 5. await with Number Promise
// ======================================
async function numberData() {
    let num = await Promise.resolve(100);

    console.log(num);
}

numberData();

// ======================================
// 6. try catch with await
// ======================================
function getError() {
    return Promise.reject("Server Error");
}

async function handleError() {
    try {
        let result = await getError();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

handleError();

// ======================================
// 7. Return Value from async
// ======================================
async function add() {
    let a = await Promise.resolve(10);
    let b = await Promise.resolve(20);

    return a + b;
}

add().then((sum) => {
    console.log(sum);
});

// ======================================
// 8. Loading Example
// ======================================
function loadPage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Page Loaded");
        }, 3000);
    });
}

async function startPage() {
    console.log("Please wait...");

    let msg = await loadPage();

    console.log(msg);
}

startPage();

// ======================================
// 9. Sequential await
// ======================================
function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("A Done"), 1000);
    });
}

function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("B Done"), 1000);
    });
}

async function sequence() {
    let a = await taskA();
    console.log(a);

    let b = await taskB();
    console.log(b);
}

sequence();

// ======================================
// 10. Parallel await using Promise.all
// ======================================
async function parallel() {
    let result = await Promise.all([
        taskA(),
        taskB()
    ]);

    console.log(result);
}

parallel();

// ======================================
// 11. Fake API Example
// ======================================
function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Vignesh",
                age: 22
            });
        }, 2000);
    });
}

async function profile() {
    let user = await getProfile();

    console.log(user);
}

profile();

// ======================================
// 12. Await Immediate Promise
// ======================================
async function instant() {
    let msg = await Promise.resolve("Instant Data");

    console.log(msg);
}

instant();

// ======================================
// 13. Await Reject Example
// ======================================
async function failTest() {
    try {
        let res = await Promise.reject("Rejected");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

failTest();

// ======================================
// 14. Order Example
// ======================================
async function orderFood() {
    console.log("Order Placed");

    let food = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Delivered");
        }, 2000);
    });

    console.log(food);
}

orderFood();

// ======================================
// 15. Execution Order
// ======================================
console.log("Start");

async function demo() {
    let msg = await Promise.resolve("Async Result");

    console.log(msg);
}

demo();

console.log("End");

// Output:
// Start
// End
// Async Result

// ======================================
// 16. Summary
// ======================================
// async => returns Promise
// await => waits for Promise result
// use try/catch for errors

// ======================================
// END
// ======================================