// IF STATEMENT/ELSE STATEMENT / ELSE IF STATEMENT

if (name === herName) {
  alert("Hi Irko");
} else {
  alert("Who the fuck are you?");
}

// else if

if (name === "Luky") {
  alert("Hi Luky!");
} else if (name === "Ivanka") {
  alert("Hi Ivanka!");
} else {
  alert("Who the fuck are you? :)");
}
//_____________________________________________________
/* 
Logical operators :

  && - and
  || - or
  ! - not

*/

/*  && AND (BAD USE)
 This does not work because one variable can
 only hold one value at one time
*/

if (name === "Luky" && name === "Ivanka") {
  alert("Hi you two!");
} else {
  alert("Fuck off! :)");
}

/*  && AND (GOOD USE)
 This does work because we have two different
 variables with two different values
 and are checking if they are both true or false
*/
if (firstName === "Luky" && lastName === "Forner") {
  alert("Hi moron :) !");
} else {
  alert("Fuck off, I don't know you! :)");
}

//_____________________________________________________

// || OR
if (name === "Luky" || name === "Ivanka") {
  alert("Hi you two!");
} else {
  alert("Fuck off! :)");
}

/* ! NOT (useful for turning on/of switches)
This would read "if name not equals Luky, alert Luky"
*/
if (!(name === "Luky")) {
  alert("Hi Luky");
}
