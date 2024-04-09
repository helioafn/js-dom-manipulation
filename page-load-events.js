// When you open a page, the following events occur in sequence:
// DOMContentLoaded -> the browser has fully loaded HTML and completed building
// the DOM tree. However, it hasn't loaded external resources like stylesheets and images.
// In this event you can start selecting DOM nodes or initialize the interface

// load: the browser fully loaded the HTML and also external resources like images
// and stylesheets.

// When you leave the page, the following events fire in sequence:
// beforeunload -> fires before the page and resources are unloaded. You can use this event to show a confirmation dialog to confirm if you really want to leave the page.
// unload -> fires when the page has completely unloaded. You can use this event to
// send the analytic data or to clean up resources.

// Handling JavaScript page load events
// To handle page events, you can call the addEventListener() method on the document object

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("The DOM is fully loaded");
});
document.addEventListener("load", (event) => {
  console.log("the page is fully loaded");
});
document.addEventListener("beforeunload", (event) => {
  // show the confirmation dialog
  event.preventDefault();
  // Google Chrome requires return value to be set
  event.returnValue = "";
});
document.addEventListener("unload", (event) => {
  // send analytic data
});
