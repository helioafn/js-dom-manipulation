const body = document.querySelector("body");
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red";
body.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
body.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border: black solid 2px; background-color: pink");


const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const divParaChild = document.createElement("p");
divParaChild.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(divParaChild);
body.appendChild(div);