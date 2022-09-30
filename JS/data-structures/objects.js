/* OBJECTS - JS type
           - Data Structure in JS
They consist of a property-value pairs and are 
assigned to a variable.

With arrays we used the [number] to acces a specific 
properties and their values stored. With objects 
we use "variable.property"
Example using the code below:
*/

const userObject = {
  name: "John",
  age: "28",
  hobby: "code",
  isMarried: false,
};

/* 
userObject.name;
'John'
userObject.isMarried;
false
 */

/* 
Adding a property to an object or re-writing 
an existing value:

userObject.favouriteFood = "vegetables"

userObject.isMarried = true

 */
/*
Objects are uselful on a different level than arrays.
We can store data in both, but in objects we tend to store
collections of strings of data that are more specific
 - user information, a car, character in game (AN OBJECT).
Whenever we store a function inside an object - METHOD.
With arrays we usually store a list of multiple items
ina single variable - numbers or ordered collections.
 */

const wizzard = {
  name: "Harry",
  age: "8",
  hobby: "sleep",
  isMarried: false,
  spells: ["expeliarmus", "vingardium leviosa"],
  useSpell: function () {
    console.log("EXPELIARMUS");
  },
};
/* useSpell is a METHOD of a wizzard */
