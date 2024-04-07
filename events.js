/*
Events are actions that occur on your 
webpage, such as mouse-clicks or 
key-presses. Using JavaScript, we can make 
our webpage listen to and react to these 
events.
There are three primary ways to go about this:
  * You can specify function attributes 
  directly on your HTML elements.
  * You can set properties in the form of 
  on<eventType>, such as onclick or 
  onmousedown, on the DOM nodes in your JavaScript.
  * You can attach event listeners to 
  the DOM nodes in your JavaScript.
*/

/*
  Method 1:
  <button onclick="alert("Hello World")">Click me</button>
  This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.
*/

/*
  Method 2:
  On the HTML file:
  <button id="btn">Click me</button>
  On the JavaScript file:
  const btn = document.querySelector("#btn");
  btn.onclick = () => alert("Hello, World!");

  This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have one “onclick” property.
*/

/*
  Method 3
  On the HTML file:
  <button id="btn">Click me too</button>
  On the JavaScript file:
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => alert("Hello, World"));

  Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.
*/

// we can access more information about the event by passing a parameter to the function that we are calling.
btn.addEventListener("click", function (e) {
  console.log(e);
});

/* 
The e parameter in that callback function contains an object that 
references the event itself. Within that object you have access to many 
useful properties and methods (functions that live inside an object) such 
as which mouse button or key was pressed, or information about the event’s 
target - the DOM node that was clicked.
*/

// Getting more information about the event target
btn.addEventListener("click", function (e) {
  console.log(e.target);
});

// Changing style of the element targeted
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


// Attaching listeners to groups of nodes
/*
We learned above that we can get a NodeList of all of the items matching a 
specific selector with querySelectorAll('selector'). In order to add a 
listener to each of them, we need to iterate through the whole list:

On the HTML:
<div id="container">
  <button id="1">Click me</button>
  <button id="2">Click me</button>
  <button id="3">Click me</button>
</div>

On the JS file:
// Getting references to all the buttons on the page
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => alert(button.id));
});

*/

