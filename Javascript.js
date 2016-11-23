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

Conditional Statements:
var degreeOutside = 70;
var numberOfClouds = 50;

function isItRaining(degreeOutside, numberOfClouds){
  if(degreeOutside > 70 && numberOfClouds > 50){
    return console.log("it's raining outside!")
  }
}

isItRaining(50, 20)

//side note on JavaScript loops
/* 

var people = ["John", "Jim", "Jill"];

for(var i = 0; i < people.length; i++){
  console.log("I am " + people[i]);
}

This Java Loop will give an out put of all the people's names because it looped each of the 
variables from the array. ALso since it is i < people.legnth, it starts at the left at runs 
through all the options going to the right. If it was i > people.legnth, it would start at the 
last variable of the array and continue on above it, therefore, this function would have no output.

*/