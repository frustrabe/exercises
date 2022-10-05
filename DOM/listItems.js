// Defining our main variables from html file
const button = document.getElementById("add-button");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");

// Adding and eventListener "click" to our button
button.addEventListener("click", function () {
  // Condition to prevent submition of empty fields
  if (input.value.length > 0) {
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
  if (input.value.length > 0 && event.code === "Enter") {
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
