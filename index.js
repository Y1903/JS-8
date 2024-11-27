// Task 1

const section = document.createElement("section");
section.setAttribute("id", "root");
section.textContent = "My name is Yuliia";
section.style.color = "red";
document.body.appendChild(section);

// Task 2

const section = document.getElementById("existing-section");
section.style.backgroundColor = "aqua";
section.style.color = "red";

// Task 3

const userName = prompt("Введіть свое імʼя");
const heading = document.createElement("h1");
heading.textContent = `Hi, ${userName}`;
document.body.appendChild(heading);
