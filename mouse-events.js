// JavaScript mouse events
// mouse events fire when you use the mouse to interact with the elements on the page

// mousedown, mouseup and click
// When you click an element, there are no less than three mouses events fire in the
// following sequence:
// 1. The mousedown fires when you depress the mouse button on the element.
// 2. The mouseup fires when you release the mouse button on the element.
// 3. The click fires when one mousedown and one mouseup detected on the element.

// dblclick: In practice you rarely uses the dblclick event. It fires when you double
// click over an element. It takes two click events to cause a dblclick event to fire

// mousemove
// The mousemove event fires repeatedly when you move the mouse cursor around an element. Even when you move the mouse one pixel, the mousemove event still fires.
// It will cause the page slow, therefore you only register mousemove event handler only when you need it and immediately remove the event handler as soon as it is no longer used

element.onmousemove = mouseMoveEventHandler;
element.onmousemove = null;

// mouseover / mouseout
// The mouseover fires when the mouse cursor is outside of the element and then move to inside the boundaries of the element.
// The mouseout fires when the mouse cursor is over an element and then moves another element.

// mouseenter / mouseleave
// The mouseenter fires when the mouse cursor is outside of an element and then moves to inside the boundaries of the element.
// The mouseleave fires when the mouse cursor is over an element and then moves to the outside of the element’s boundaries.
// Both mouseenter and mouseleave does not bubble and does not fire when the mouse cursor moves over descendant elements.

// Detecting mouse buttons
// The event object passed to the mouse event handler has a property called button that indicates which mouse button was pressed on the mouse to trigger the event

// The mouse button is represented by a number:
// 0: the main mouse button is pressed, usually the left button.
// 1: the auxiliary button is pressed, usually the middle button or the wheel button.
// 2: the secondary button is pressed, usually the right button.
// 3: the fourth button is pressed, usually the Browser Back button.
// 4: the fifth button is pressed, usually the Browser Forward button.

// See this example:
let btn = document.querySelector("#btn");

// disable context menu when right-mouse clicked
btn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// show the mouse event message
btn.addEventListener("mouseup", (e) => {
  let msg = document.querySelector("#message");
  switch (e.button) {
    case 0:
      msg.textContent = "Left mouse button clicked.";
      break;
    case 1:
      msg.textContent = "Middle mouse button clicked.";
      break;
    case 2:
      msg.textContent = "Right mouse button clicked.";
      break;
    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`;
  }
});

// Modifier keys
// When you click an element, you may press one or more modifier keys: Shift, Ctrl, Alt, and Meta (windows key on Windows keyboards, Command key on the Apple keyboard).

// To detect if these modifier keys have been pressed, you can use the event object passed to the mouse event handler.
// The event object has four Boolean properties, where each is set to true if the key is being held down or false if the key is not pressed.
// See the following example
let btnKeys = document.querySelector("#btnKeys");

btnKeys.addEventListener("click", (e) => {
  let keys = [];

  if (e.shiftKey) keys.push("shift");
  if (e.ctrlKey) keys.push("ctrl");
  if (e.altKey) keys.push("alt");
  if (e.metaKey) keys.push("meta");

  let msg = document.querySelector("#messageKeys");
  msg.textContent = `Keys: ${keys.join("+")}`;
});

// Getting screen coordinates
// The screenX and screenY properties of the event passed to the mouse event handler
//return the screen coordinates of the location of the mouse in relation to the entire screen.
// On the other hand, the clientX and clientY properties provide the horizontal and /
//vertical coordinates within the application’s client area at which the mouse event occurred
// See an example:
let track = document.querySelector("#track");
track.addEventListener("mousemove", (e) => {
  let log = document.querySelector("#log");
  log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`;
});
