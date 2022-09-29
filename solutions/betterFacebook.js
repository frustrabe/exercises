const userDatabase = [
  {
    username: "Chad",
    password: "peart",
  },
  {
    username: "John",
    password: "hendrix",
  },
  {
    username: "Anthony",
    password: "bukowski",
  },
  {
    username: "Flea",
    password: "davis",
  },
];

const userTimeline = [
  {
    username: "Magic John",
    timeline: "I am John, hello friends. I like to shred guitar!",
  },
  {
    username: "Michael",
    timeline: "I am Michael, hello you freaks. I like to slap bass!",
  },
  {
    username: "Tony",
    timeline: "I am Anthony, hi there. I like to sing out of tune!",
  },
];

var usernameVerification = prompt("Please provide your username:");
var passwordVerification = prompt("Please provide your password:");

/* OLD SOLUTION USING IF STATEMENT ON JUST ONE USER
   
  if (u === database[0].username && p === database[0].password) {
    console.log(timeline);
  } else {
    alert("The username or password were not correct! Try again.");
  } 
  */

//-------------------------------------------

// NEW SOLUTION USING FOR LOOP WITH COMBINATION OF IF AND ELSE STATEMENTS

function validUser(user, pass) {
  for (var i = 0; i < userDatabase.length; i++) {
    if (
      userDatabase[i].username === user &&
      userDatabase[i].password === pass
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (validUser(username, password)) {
    console.log(userTimeline);
  } else {
    alert("Provided username and password were not correct! Try again.");
  }
}

signIn(usernameVerification, passwordVerification);
