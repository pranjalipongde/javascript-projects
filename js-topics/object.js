//ways to carete objects

//1st - object literal

// const person = {
//   name: "john",
//   age: 20,
//   greet: function () {
//     console.log("Hello!!!");
//   },
// };

//access object value
// console.log(typeof person);
// console.log(person.name);
// console.log(person.greet);
// person.greet();

//2nd - instance of object Directly

// const person = new object({
//   name: "John",
//   age: 20,
//   greet: function () {
//     console.log("Hello!!!");
//   },
// });

//3rd - constructor fun
function Person() {
  this.name = "John";
  this.age = 30;
  this.greet = function () {
    console.log("Helllooo!");
  };
}

const person = new Person();
console.log(person.name);
console.log(person.age);
console.log(person.greet);
person.greet();
