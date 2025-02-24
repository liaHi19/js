// 1. In the inner scope
// 2. Any outer functions
// 3. Global scope

let age = 10;

function outer() {
  // let age = "ageless";
  function inner() {
    // let age = "Eternal";
    console.log(age);

    function superInner() {
      // let age = "superInnerAge";
      console.log(age);
    }
    superInner();
  }
  inner();
}

outer();

let animal = "Leo";

function printAnimal() {
  console.log(animal);
}

function alsoPrintAnimal() {
  let animal = "Cancer";
  printAnimal();
}

alsoPrintAnimal(); // -> "Leo" (looking where the function is declare static (lexual)scope)
