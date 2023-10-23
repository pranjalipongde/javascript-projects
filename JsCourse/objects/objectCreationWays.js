// ways to create object

//object constructor
var object = new Object();

//create method
var object = Object.create(null);

//object literal = Object literal property values can be of any data type, including array, function, and nested object.

var person = {
  name: "John",
  age: 24,
};

//function constructor
function User(name) {
  this.name = name;
  this.age = 21;
}

var object = new User("John");
console.log(object);

//function constructor with prototype
function User1() {
  User1.prototype.name = "John";
  var object = new User1();
}
