/* 
LOOPS - used to execute a block of code a number of times. They are handy
if we want to run the same code over and over again, each time with a 
different value outcome. They are often used in combination with arrays.

FOR LOOP
Loops through a block of 
code a number of times
*/

const todoList = [
  "wake up",
  "get dressed",
  "catch train",
  "code",
  "eat",
  "learn more code",
  "get home",
  "cook",
  "code",
  "spend time with irko",
  "sleep",
];

const todoListImporant = [
  "WAKE UP!!",
  "GET DRESSED!!",
  "CATCH TRAIN!!",
  "CODE!!",
  "EAT!!",
  "LEARN MORE CODE!!",
  "GET HOME!!",
  "COOK!!",
  "CODE!!",
  "SPEND TIME WITH IRKO!!",
  "SLEEP!!",
];

/* 
 We will do a for loop and as a first step we assign a
 variable "i" with a 0 (semicolon makes an end of an expression)
 When "i" (which is now 0) is less than the number of srings inside this
 array (if 0 is less than 8) run this loop and always add 1 at the 
 end "(i++)". It's called INCREMENTING.

 The second part does the "!" addition. So we grab our todoList and say
 indexes in "todoList" equal to indexes in "todoList" + "!"
*/

/*
for (var i = 0; i < todoList.length; i++) {
  todoList[i] = todoList[i] + "!";
}
*/

/* 
To make them "check out" like a todo list would do we can use the .pop
method we already know, like this.

METHOD 1.

This way we just tell the program to loop through this. "i" is 0 and 
"todoList.length" is 11. Everytime it gets popped "length" became 10
and "i" became 1. This continued until this "i < todoList.length" was
valid and if not then it stoped In this case we cannot .pop() all of
the items inside. We will do that in the Method 2. part.
*/

/* 
for (var i = 0; i < todoList.length; i++) {
  todoList.pop(); //
} 
*/

/* 
METHOD 2.

Here we define a variable saying we have a fixed length. This way it
the program runs through the Array without stopping until there is
nothing to loop through.
*/

/* 
const todoListLength = todoList.length;
for (var i = 0; i < todoListLength; i++) {
  console.log(todoList[i], i);
}
*/

// ____________________________________________________________________

/* 
WHILE LOOP
Loops through a block of code while a specified
condition is true

while (condition) {
   code block to be executed
}


Here we set our variable "counterOne" to 0 and give it 
a condition. While counterOne is less that 10
we console log it and we make it iterate so it 
reaches the final number
*/

/* 
let counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++;
} 
*/

// ____________________________________________________________________

/* 
DO WHILE LOOP
It a variant of the WHILE loop. It will execute the block
of code once, before checking the condition is true,
then it will repeat the loop as long as the condition
is true.

do {
  code block to be executed
}
while (condition);

*/

/* 
let counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0);
*/

// ____________________________________________________________________

/* 
forEach LOOP
Got added as part of the ES5.
Method that calls a function once 
for each array element.

In the example below we are taking the todoList
array and we assign a function with a "i" argument
which then gets the values of that array and logs
them to console. If we also want the index numbers
we can simply put it as a second argument
*/

todoListImporant.forEach(function (todoListImporant, i) {
  console.log(todoListImporant, i);
});

//OR

function logTodoList(todoList, i) {
  console.log(todoList, i);
}

todoList.forEach(logTodoList);
// This one is reusable now, we can use it outside
// of the logTodoList function.
todoListImporant.forEach(logTodoList);
/*
 It is the same as the METHOD 2 in the for loop
 just cleaner.
*/

//console.log("THE SAME RESULT HERE HEHE");

/* const todoListLength = todoList.length;
for (var i = 0; i < todoListLength; i++) {
  console.log(todoList[i], i);
}
 */
