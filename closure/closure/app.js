function createCounter() {
  let count = 0; // private variable
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getCount: function () {
      return count;
    },
  };
}

// const count = createCounter();
// console.log(count.increment());

// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.getCount());

// exists once
const onlyOneCounter = (function () {
  let count = 0; // private variable
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getCount: function () {
      return count;
    },
  };
})();
// console.log(onlyOneCounter.increment());

// factory functions
function createExponentFunction(exponent) {
  return function (val) {
    return exponent ** val;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

// console.log(square(4));
// console.log(cube(2));

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book-");
const getUserId = uniqueIdGenerator("user_");

document.getElementById("closure").addEventListener(
  "click",
  (function () {
    let count = 0;
    return function () {
      count += 1;
      console.log(`You clicked on me ${count} times!`);
    };
  })()
);

function createCounterBtn(id) {
  const btn = document.getElementById(id);
  let count = 0;
  btn.addEventListener("click", function () {
    count += 1;
    btn.innerText = `Clicked ${count} times`;
  });
}

createCounterBtn("btn1");
createCounterBtn("btn2");
createCounterBtn("btn3");
