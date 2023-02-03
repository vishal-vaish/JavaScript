//hoisting
// It is concept which enable us to extract values of variable and functions even before assigning value without getting error

getName();
console.log(x);
var x=7;
function getName() {
    console.log("My name is Vishal vaish");
}