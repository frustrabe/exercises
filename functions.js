//Function declaration

function sayHello() {
  console.log("Hello");
}

sayHello();

//-------------------------------------------------------

// Function expression
// (Anonymous function as it doesnt have a name)

var sayBye = function () {
  console.log("Bye");
};

sayBye();

//-------------------------------------------------------

// Exercise
// Function to "sing" the param "lyrics" we insert into the
// sing function, so we dont have to replicate it every time
// param changes.

function sing(lyrics) {
  console.log(lyrics);
}

sing("Laa Dee Daa");
sing("Laa Dee Doo");
sing("Laa Dee Dee");
sing("Laa Dee Dii");

//---------------------------
// Function to simply multiply whatever we
// assign to "a" and "b" with a necessary "return"
// Return is a final EXIT to the function, whatever would
// come after, would not get run.

function multiply(a, b) {
  return a * b;
}

multiply(5, 10);

//---------------------------

// Function combined with the "if" statement we
// learned before. If the if condition is not valid,
// it will return the else statement. We assigned the function to
// a "c" variable and are alerting it with the given number inputs.

const c = function multiplyWithCondition(a, b) {
  if (a > 10 || b > 10) {
    return "Thats too hard!";
  } else {
    return a * b;
  }
};
alert(c(7, 9));
//-------------------------------------------------------
/* Parameters and Arguments slightly different, but very simillar */

// PARAMETERS - variables declared in the function brackets (a, b)
/* function sum(a, b) {
  return a + b;
} */

// ARGUMENTS - actual variable values that get passed to the function (4, 5)
/* var total = multiply(4, 5);
alert(total); */
