/* 
LOOPS - used to execute a block of code a number of times. They are handy
if we want to run the same code over and over again, each time with a 
different value outcome. They are often used in combination with arrays.
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

/* 
 We will do a for loop and as a first step we assign a
 variable "i" with a 0 (semicolon makes an end of an expression)
 When "i" (which is now 0) is less than the number of srings inside this
 array (if 0 is less than 8) run this loop and always add 1 at the 
 end "(i++)". It's called INCREMENTING.

 The second part does the "!" addition. So we grab our todoList and say
 indexes in "todoList" equal to indexes in "todoList" + "!"
*/
for (var i = 0; i < todoList.length; i++) {
  todoList[i] = todoList[i] + "!";
}

/* 
To make them "check out" like a todo list would do we can use the .pop
method we already know, like this.
*/
const todoListLength = todoList.length;

for (var i = 0; i < todoListLength; i++) {
  todoList.pop();
}
