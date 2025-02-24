//  var food = undefined;
//  console.log(food);
//  food = pizza

console.log(food); // -> undefined (hoisting)
var food = "pizza";

function blah() {
  console.log(color); // -> undefined (hoisting to top of the function)
  var color = "black";
}

blah();
function blah2() {
  // let color = NO VALUE AT ALL
  // Temporal dead zone starts
  // console.log(color);
  // Reference Error : cannot access color before initialization
  //  color = "black";
  // Temporal dead zone ends
}

function blah2() {
  console.log(color); // -> Reference Error : cannot access color before initialization
  let color = "black";
}

blah2();

function blah3() {
  if (false) {
    var message = "Hello";
  }
  console.log(message); // -> undefined, var message is hoisted to the top of the function
}

blah3();
