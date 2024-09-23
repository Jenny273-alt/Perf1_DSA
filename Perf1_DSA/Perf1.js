//1
function myFunction() { 
  if (true) {
    var myVar = "Hello"; //accessible throughout the function
    let myLet = "World"; //accessible only within the if block
    const PI = 3.14; }

console.log(myVar); //output: "Hello"
console.log(myLet);
console.log(PI);


//2
let myBool = false;
if (myBool) {
  console.log("This won't print, as false"); }
  else {
  console.log("This will print."); }

