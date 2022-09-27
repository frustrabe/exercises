// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

/* const newUser = {
  username: "Chad",
  password: "neilpeart",
}; */

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [
  {
    username: "Chad",
    password: "neilpeart",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const timeline = [
  {
    username: "John",
    timeline: "I am John, hello friends. I like to shred guitar!",
  },
  {
    username: "Michael",
    timeline: "I am Michael, hello you freaks. I like to slap bass!",
  },
  {
    username: "Anthony",
    timeline: "I am Anthony, hi there. I like to sing out of tune!",
  },
];

var usernameVerification = prompt("Please provide your username.");
var passwordVerification = prompt("Please provide your password.");

function showTimeline(u, p) {
  if (u === database[0].username && p === database[0].password) {
    /* alert("You are now signed in"); */
    console.log(timeline);
  } else {
    alert("The username or password were not correct! Try again.");
  }
}
showTimeline(usernameVerification, passwordVerification);
