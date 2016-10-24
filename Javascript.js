/* http://slides.com/ifang/javascriptbasics */

//this is a line comment
/* this is a block comment */

Variables:
var myName = "Zak"; //this is a string
var number = 1; //this is an integer
var booleanExample = false; //this is a boolean type
NaN //not a number
undefined //unassigned variable

Functions:
an executed statement
function nameOfFunction (){ //structure of a function
  console.log("this will be displayed"); //what's in () is displayed on console
}
nameOfFunction(); //this is invoking the function

function nameOfFunction (a, b) { //a and b are parameters in a function
  console.log(a + b);
}

nameOfFunction(10, 11); //this will output the number 21 since 10 & 11 are being added

function createGreeting (name, age) { //again, name & age are paramaters
  if (age < 32){ //if the age is less than 32 it will run the console log below
    console.log('hello' + name); //name does not need "" because it is a variable
    return 'hello' + name; //return is the output
  }
  else {
    console.log('hello Mr. ' + name); //otherwise, if the age is greater than 32 it runs this console.log
    return 'hello Mr. ' + name; //any console.log after return will not be displayed on the output
  }
}

createGreeting('Zak', 16)