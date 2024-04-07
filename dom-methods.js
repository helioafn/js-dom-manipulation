// Query selectors
// Returns a reference to the first match of selector
element.querySelector(selector); 

// Returns a 'NodeList' contaning references to all of the matches of the selectors
element.querySelectorAll(selectos);

// NodeList isn't an array, has some behaviors of an array, but is a NodeList.
// It doesn't have array methods, if you need to use array methods on a NodeList
// You can convert the NodeList into an array using Array.from() or spread operator (...array).

// Creating elements
document.createElement(tagName)

// This creates an div into memory, so you can manipulate the element (adding styles, classes,  ids, texts etc) before putting into the page

// Appending elements
// Appends childNode as the last child of parentNode
parentNode.appendChild(childNode);

// inserts newNode into parentNode before referenceNode
parentNode.insertBefore(newNode, referenceNode);

// Remove elements
// removes child from parentNode on the DOM and returns a reference to child
parentNode.removeChild(child);

// Altering elements
// When you have a reference to an element, you can use that reference to alter the element's own properties. This allows you to do many useful alterations, like adding, removing, or altering attributes, changing classes, adding inline style information, and more.

const div = document.createElement("div");
// Adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue, background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white");

/*
When accessing a kebab-cased CSS property 
like background-color with JS, you will 
need to either use camelCase with dot 
notation or bracket notation. When using 
bracket notation, you can use either 
camelCase or kebab-case, but the property 
name must be a string.
*/

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];


// Editing attributes
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

// Working with classes
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

// It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.

// Adding text content
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// Adding HTML content
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

/*
Note that using textContent is preferred 
over innerHTML for adding text, as 
innerHTML should be used sparingly to 
avoid potential security risks.
*/


