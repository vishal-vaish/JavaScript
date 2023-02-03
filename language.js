//var num="69";

//const fooNumber=Number(num);
//console.log("foo Number: "+fooNumber);
//console.log("type of: "+typeof fooNumber);

function throwError() {
    throw new Error("2 numbers expected");
  }
  
  function sumNumber(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
      throwError();
    } else {
      if (num1 > num2) {
        console.log(num1 - num2);
      } else {
        console.log(num2 - num1);
      }
    }
  }
  
sumNumber(5, 6);

  