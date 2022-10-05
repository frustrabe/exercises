// Defining our variables
const button = document.getElementById("add-button");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");

// Adding and eventListener to our button that has a function
// which adds our element on click of a button
button.addEventListener("click", function () {
  let li = document.createElement("li");
  let textNode = document.createTextNode;

  li.appendChild(textNode(input.value));
  ul.appendChild(li);
});
