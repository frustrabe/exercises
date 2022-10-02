/* DOM (DOCUMENT OBJECT MODEL)
 is an Application Programming Interface for web documents 
 (such as HTML). It defines a logical structure of documents 
 and the way the document is accessed and manipulated.
 
 "window" - is the whole browser window containing Properties and Methods.
 One of these Properties is 
 "document" - is the owner of all other objects in our web page.
*/
// ------------------------------------------------------------------

/* DOM Selectors
 
*/
document.getElementsByTagName("h1");
// "getElementsByTagName" like this only gets the tag element
// we specify and returns the Collection array

// HTMLCollection [h1]

document.getElementsByTagName("h1")[0];

// this way we actually acces the full element (specifying using
// the number of the element inside the array )

// <h1>Hello DOM</h1>

// ----------------------------

document.getElementsByClassName("second-p");
// "getElementsByClassName" like this only gets the class we
// assign to an element and returns the Collection array

// HTMLCollection [p.second-p]

document.getElementsByClassName("second-p")[0];

// this way we actually acces the full element (specifying using
// the number of the element inside the array )

// <p class="second-p">Les gou</p>

// ----------------------------

document.getElementById("first-p");
// "getElementById" is not plural becasue we are only getting a
// single "id" and returns the full element and not the Collection

// <p id="first-p">Get it done today</p>

// ----------------------------

/* DOM  query Selectors
 A more powerful way of selecting elements than ".getElements..."
 */
document.querySelector("h1");

// This method returns the "FIRST" element that matches a CSS selector

// <h1>Hello DOM</h1>

document.querySelectorAll("li");

// This method returns all elements that match a given CSS selectors

// NodeList(5) [li, li, li, li, li]

// ----------------------------

document.querySelector("li").getAttribute("random");

// This method gets the value of the class attribute of an element
// In this case we select the li element and its attribute "random"
// and we receive the value stored inside

// '23'

document.querySelector("li").setAttribute("random", "brocolli");

// This method sets the value of the class attribute of an element
// In this case we select the li element and its attribute "random"
// and we give it our new value "brocolli" to overwrite the one before

// We can use it to change styles too
document.querySelector("p").setAttribute("style", "color: red");
// Here we are manipulating the css property "color" and changing
// the "p" tags color to red

// OR

document.querySelector("p").style.color = "yellow";

// However we should assign a variable to our tag and
// this way we dont have to write it again and can just access it.
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");

// adding a stolen css class using "className"
// we link it in html
h1.className = "coolTitle";
h2.className = "coolTitle";
h1.className = "coolTitle";
p.className = "coolTitle";
p.style.color = "red";
