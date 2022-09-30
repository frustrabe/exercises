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
 */
