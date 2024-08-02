let x = 21;
let girl = function () {
  var x = 20;
  console.log(x); // undefined
};
girl();

console.log(0.1 + 0.2 == 0.3); // false because of the float precision issues, after adding this both the value will be 0.300000000 something, that is why it will show false

function isEven() {
  return "2" - 2 === 0 ? true : false;
}
console.log(isEven()); // true because in javascript this "2" will be converted to number because of the type coercion and because of modulus it will be converted.

function getLength(str) {
  str = String(str);
  return str.length;
}
console.log(getLength(123)); // this is the right code, will have to convert this str to string.

function createCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter1 = createCounter();

const counter2 = createCounter();

console.log(counter1()); // 0 because of the old value of count 0

console.log(counter1()); // 1 because of the old value of count 1

console.log(counter2()); // 0 because of the old value of count 0

console.log(counter1()); // 2 because of the old value of count 2

console.log("Start");

setTimeout(function () {
  console.log("Timeout");
}, 0);

Promise.resolve("Promise").then(function (str) {
  console.log(str);
});

console.log("End");

// the output will be
//Start
//End
//Promise
//Timeout

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`); // Hello, my name is Alice
};

const alice = new Person("Alice");

alice.greet();
