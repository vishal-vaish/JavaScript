// print statement
console.log("Hello World");

//Declare the variable in JS
var a=4;
//after version:6 we also use
let b=6;
const c=6; //variable declare cannot be change
console.log("Value of a is",a);

//check the type of variable
console.log(typeof a);
console.log(typeof typeof a);

//define array in java
var arr=[1,2,3,4,5,6,7];
const arr2=[1,"Hello","World",56]
console.log(arr2);

//Object is a collection of Key Value pair
var obj={
    name:"Vishal Vaish",
    city:"Sitapur",
    address:"Same Address",
    designation:"Full Stack Developer",
    state:"Uttar Pradesh",
    age:26,
    hasCompletedGraduation:true,
};

//keys in Object are created using a , 

console.log("obj is",obj);
//Access key
console.log(obj.name);
console.log(obj["city"]);

//function declaration
//anonymous function
function add(a,b){
    const sum=a+b;
    return sum;
console.log(sum);
}
//other ways to write function
//function expression
var add=function(a,b){
    const sum=a+b;
    return sum;
}
console.log("sum is",a+b);


var n=2;
function square(num){
    var ans=num+num;
    return ans;
}
var square2=square(n);
var square4=square(4);

var boo=8;
function x(){
    var foo=5;
    function y(){
        var baz=8;
        return baz;
    }
    var yvalue=y();
    return yvalue+foo;
}
const xvalue=x();