/* 
    DOM EVENTS - usefull when we want to run JS when a user 
    does an "event" - page load, button click, keyboard click,
    mouse hover, submit, etc.
*/
// addEventListener(type event - click, function to call)
//          - method that attaches an event handler to the
//            specified element
const button = document.getElementsByTagName("button")[0];
// assigning a variable where we select a button ([0] is
// necessary as getElementsByTagName returns an array so we
// need to specify, otherwise we get)
// Uncaught TypeError: button.addEventListener is not a function

button.addEventListener("click", function () {
  console.log("Clicked!");
});
