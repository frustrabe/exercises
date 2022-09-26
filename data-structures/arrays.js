/* 
ARRAYS 
The variables in which we store different elements in JS.
Kinda like a small private database :). They can contain
numbers, strings, booleans etc. Even FUNCTIONS!
 */

// Examples of basic arrays
const listOfAnimals = ["tiger", "elephant", "cat", "bear"];

// Accesing the first element "tiger" in the "listOfAnimals" array (we count from 0)
/* console.log(listOfAnimals[0]);
 */
const listOfNumbers = [1, 2, 3, 5, 8];

const listOfBooleans = [true, false, undefined];

// Even this can be an array, but is reaaaly not advised.
const listOfEverything = [1, undefined, "tiger", function array() {}];

// Also, arrays within arrays in a thing

const listOfArrays = [
  ["tiger", "elephant", "cat", "bear"],
  [1, 2, 3, 5, 8],
  [true, false, undefined],
];
/* console.log(listOfArrays[1]);
 */
// we will acces the "[1, 2, 3, 5, 8]" array as it is second in the row.

// If we want to acces the "bear" we need to do:
/* console.log(listOfArrays[0][3]);
 */
// First index "[0]" specifies which array we want to access, second
// index [3] specifies the element inside the accesed array.

//---------------------------------------------------------------------------

/* 
JavaScript has pre-defined methods for arrays we can use to
manipulate with arrays such as:

array.shift() - exits the first element inside the array we chose to use it in
array.pop() - exits the last element inside the array we chose to use it in
array.push("elephant") - adds an element that we declare ("elephant")
array.concat(["bee", "deer"]) - concatonates an array (we define) to the array we are in

*/
const array = ["dog", "rat", "cat", "bird"];

array.shift();
// Exits the "dog"
// array = ["rat", "cat", "bird"]
array.pop();
// Exits the "bird"
// array = ["rat", "cat"]
array.push("elephant");
// Adds the "elephant"
// array = ["rat", "cat", "elephant"]
array.concat(["bee", "deer"]);
// Joins a new array to an  existing array
// array = ["rat", "cat", "elephant", "bee", "deer"]
// However, when using concat() in order to actually preserve it in this
// form, we need to do it through assiging it into a variable, like this
var myArray = array.concat(["deer"]);
myArray = ["rat", "cat", "elephant", "deer"];
