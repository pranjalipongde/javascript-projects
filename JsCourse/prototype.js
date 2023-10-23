//prototype - every function and object has a property named prototype by default

//Prototype is used to provide additional property to all the objects created from a constructor function.

//object literal

// const person = {
//   alive: true,
// };

// const musician = {
//   plays: true,
// };

// console.log(musician.plays);
//we can not access the proprties of another object directly so with help of prototype we can do that
// console.log(musician.alive); //undefined

//constructor func

function Person() {
  this.name = "john";
  this.age = 23;
}

//creating objects
const person1 = new Person();
const person2 = new Person();

//adding properties to constructor
Person.prototype.gender = "male";

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender); //male
console.log(person2.gender); //male
