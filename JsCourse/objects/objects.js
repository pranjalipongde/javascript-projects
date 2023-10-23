// ways to create object

//object constructor
var object = new Object();

//create method
var object = Object.create(null);

//

//obejct - collection of properties

//  const product = {
//    name: "Ball",
//    price: 100,
//  };
//  console.log(product);
//  console.log(product.name);
//  console.log(product.price);

//to change proper value
//  product.name = "cotton socks";
//  console.log(product);

//delete property
//  delete product.name;
//  console.log(product);

//ex 2 - here delete keyword not gonna affect "a" as it is a local variable
//  const func = (function (a) {
//    delete a;
//    return a;
//  })(5);
//  console.log(func);

//ex-3

//  const user = {
//    name: "John",
//    age: 30,
//    "my age is ": true,
//  };
//  console.log(user["my age is"]);

//ex-5 - how to add dynamic properties
//  const property = "firstName";
//  const name = "Pranjali";

//  const user = {
//    [property]: name,
//  };
//  console.log(user);
//  console.log(user.firstName);

//ex-6 - how to iterate over object properties
const user1 = {
  name: "Pranjali",
  age: "25",
  isTotalAwesome: true,
};

for (key in user1) {
  console.log(key); //print the property key
  console.log(user1[key]); // print the values
}

//ex-7 whats the output
//here we have two same keys  so 1st key will be replaced by third one so will get output as a:'three', b :'two'
const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj);

//create a function multiplyByTwo(obj) that multiple all numeric property values of nums by 2.
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
console.log(nums);

// ---whats the output of the following code
//output- 456 , Reason - When you try to use an object as a property name in JavaScript, it gets automatically converted to a string. The default behavior of the toString() method of an object is to return the string "[object Object]". Therefore, b.toString() and c.toString() both return the same string representation: "[object Object]".
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
//  console.log(a);
console.log(a[b]); //456

//---- what is JSON.stringify and JSON.parse?
const user = {
  name: "Pranjali",
  age: "25",
};

const strObj = JSON.stringify(user);
console.log(strObj); //convert object into string

console.log(JSON.parse(strObj)); //to convert into an object

//useCase - when store data into the local Storage
localStorage.setItem("test", user);

//--- what is the output
console.log([..."Lydia"]); //['L', 'y', 'd', 'i', 'a']

//whts is the output
const user2 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user2 };

console.log(admin); //{admin: true, name: 'Lydia', age: 21}

//output?
const settings = {
  userName: "Pranjali",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); //only stringify the level and health
console.log(data);

//--- output
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  }, //notmal function
  perimeter: () => 2 * Math.PI * this.radius, // here this is refer to the global object i.e window so it will take this.radius as undefined , so the output is NaN
};
console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN

//--whta is destructuring
let user3 = {
  name: "Pranjali",
  age: "25",
};

const { name } = user3; //destructuring
console.log(name);

//nested object
let user4 = {
  name: "Pranjali",
  age: "25",
  fullName: {
    first: "Pranjali",
    last: "Pongde",
  },
};

const {
  fullName: { first },
} = user4; //nested distruncturing
console.log(first);

//output
function getItems(fruitList, favoriteFruits, ...args) {
  return [...fruitList, ...args, favoriteFruits];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

//--output
let x = { greeting: "Hey" };
let y;

y = x;
x.greeting = "Hello";
console.log(y.greeting); // Hello - we are providing the refferece of object so it will change the both object

//--output
console.log({ a: 1 } == { a: 1 }); //false
console.log({ a: 1 } === { a: 1 }); //false
// both object reference have different object reference number so both of the are totally diff

//--output
let person = {
  name: "Lydia",
};
const members = [person]; // we are trying to modify array and providing the value from 0th index so it wont gonna affect
person = null;

console.log(members);

//--output
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); //20
multiply(value); //20
multiply(value); //40 - number has modified by 20
