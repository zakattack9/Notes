//Arrays
var arrayExample = ["aString", 1, "zeroIndex", 3, null, ["arrayInAnArray", 9]];
//accessing arrays
console.log(arrayExample[2]);
console.log(arrayExample[5][0]); //second bracket to access the array inside the array

//Objects
var objectExample = {
  objectName: "propertyValue", 
  example: 1, 
  anotherObject: "property",
  objectArray: ["Array", {ObjectsInArray: "ok", more: "yes"}, "ZeroIndex", 9];
}
//accessing objects
console.log(objectExample.objectArray[0]); //accessing object with dot notation
console.log(objectExample[objectArray][0]); //accessing object with brackets