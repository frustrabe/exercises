// Defining our main variables from html file
const addButton = document.getElementById("add-button");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");
const resetButton = document.getElementById("reset-button");

// Function to prevent empty submition
function inputLength() {
  return input.value.length;
}

// Function to create a list item and append it to a unordered list
function createListElement() {
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

// Function to provide listing after clicking button
function addListAfterClick() {
  // Condition to prevent submition of empty fields
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function to provide listing after pressing Enter
function addListAfterKeypress(event) {
  // Condition to prevent submition of empty fields and
  // adding "Enter" as a form of submition
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
}

// Function to provide reset list button
function removeList() {
  ul.innerHTML = "";
}

// Adding and eventListener "click" to our button
addButton.addEventListener("click", addListAfterClick);

// Adding and eventListener "keypress" to our input field
input.addEventListener("keypress", addListAfterKeypress);

// Adding a reset button
resetButton.addEventListener("click", removeList);
