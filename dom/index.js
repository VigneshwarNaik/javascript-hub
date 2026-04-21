// ======================================
// JAVASCRIPT DOM
// ONLY IMPORTANT FULL CODE
// ======================================

// ======================================
// 1. Select Element by ID
// HTML:
// <h1 id="title">Hello</h1>
// ======================================
let title = document.getElementById("title");

console.log(title);

// ======================================
// 2. Change Text
// ======================================
title.innerText = "Welcome";

// ======================================
// 3. Change HTML
// ======================================
title.innerHTML = "<span>JavaScript DOM</span>";

// ======================================
// 4. Change CSS Style
// ======================================
title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";

// ======================================
// 5. querySelector()
// HTML:
// <p class="msg">Text</p>
// ======================================
let msg = document.querySelector(".msg");

msg.innerText = "Updated Text";

// ======================================
// 6. querySelectorAll()
// HTML:
// <li class="item">A</li>
// <li class="item">B</li>
// ======================================
let items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.style.color = "blue";
});

// ======================================
// 7. Button Click Event
// HTML:
// <button id="btn">Click</button>
// ======================================
let btn = document.getElementById("btn");

btn.onclick = function () {
    alert("Button Clicked");
};

// ======================================
// 8. addEventListener()
// ======================================
btn.addEventListener("click", function () {
    console.log("Clicked");
});

// ======================================
// 9. Input Value
// HTML:
// <input id="name">
// ======================================
let input = document.getElementById("name");

btn.addEventListener("click", function () {
    console.log(input.value);
});

// ======================================
// 10. Create New Element
// ======================================
let p = document.createElement("p");

p.innerText = "New Paragraph";

document.body.appendChild(p);

// ======================================
// 11. Remove Element
// ======================================
p.remove();

// ======================================
// 12. Change Attribute
// HTML:
// <img id="photo">
// ======================================
let img = document.getElementById("photo");

img.src = "image.jpg";
img.alt = "My Image";

// ======================================
// 13. classList Add / Remove
// ======================================
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("dark");

// ======================================
// 14. Form Submit Prevent
// HTML:
// <form id="form">
// ======================================
let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form Submitted");
});

// ======================================
// 15. Real Example
// HTML:
// <button id="change">Change</button>
// <h1 id="text">Hello</h1>
// ======================================
let change = document.getElementById("change");
let text = document.getElementById("text");

change.addEventListener("click", function () {
    text.innerText = "Welcome Vignesh";
    text.style.color = "green";
});

// ======================================
// END
// ======================================