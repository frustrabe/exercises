// Defining our main variables from html file
const addButton = document.getElementById("add-button");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");
const resetButton = document.getElementById("reset-button");

function inputLength() {
  return input.value.length;
}

// Adding and eventListener "click" to our button
addButton.addEventListener("click", function () {
  // Condition to prevent submition of empty fields
  if (inputLength() > 0) {
    // variable "list" gets created
    let li = document.createElement("li");
    // variable "textNode" gets created and grabs the value
    // of our input field
    let textNode = document.createTextNode(input.value);
    // list appneds the "textNode" variable
    li.appendChild(textNode);
    // unordered list appneds the "list" variable with "textNode"
    ul.appendChild(li);
    // input field value gets cleared to an empty string
    input.value = "";
  }
});

// Adding and eventListener "keypress" to our input field
input.addEventListener("keypress", function (event) {
  // Condition to prevent submition of empty fields and
  // adding "Enter" as a form of submition
  if (inputLength() > 0 && event.code === "Enter") {
    // variable "list" gets created
    let li = document.createElement("li");
    // variable "textNode" gets created and grabs the value
    // of our input field
    let textNode = document.createTextNode(input.value);
    // list appneds the "textNode" variable
    li.appendChild(textNode);
    // unordered list appneds the "list" variable with "textNode"
    ul.appendChild(li);
    // input field value gets cleared to an empty string
    input.value = "";
  }
});

// Trying to add a reset button
resetButton.addEventListener("click", function () {
  input.value = "";
});
