//  arrow function - shorter way of creating a function expression .
// - don't have their own 'this' ,
// -don't have prototypes, cannot used for constructor and not be used as obejct method

// normal function
// function func(a, b, c) {} //function declaration

// var func = function (a, b, c) {
//   return a + b * c;
// }; //function expression

// console.log(func(5, 6, 2));

//arrow function
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(4, 9));

// const mul = (c, d) => c * d;
// console.log(mul(4, 5));

// const scores = [10, 8, 6, 3, 9]
// localStorage.setItem('scores', scores)
// localStorage ;

/* ----------------Call Apply Bind ---------------- */
//1 helps to pass diff value of "this " to a function
// 2 this  methods lets you reuse methods of different objects

//call - with call we can use methods  of other objects without writing the same one again and again
//ex 1
// let student1 = {
//   name: "John",
//   battery: 60,
//   batteryChg: function () {
//     this.battery = 100;
//   },
// };

// let student2 = {
//   name: "John",
//   battery: 50,
// };

// student1.batteryChg.call(student2);
// console.log(student1);
// console.log(student2);

// student1.batteryChg();
// console.log(student1);

//ex2
// const person1 = {
//   name: "He",
//   age: 27,
//   greet: function () {
//     console.log(`Hello ${this.name}, you are ${this.age}`);
//   },
// };

// const person2 = {
//   name: "She",
//   age: 30,
// };

// person1.greet.call(person2); // we can pass any arguments aswell

//apply - same as call but here we pass argunments in the form of array
// const person3 = {
//   name: "He",
//   battery: 27,
//   chargeBattery: function (a, b) {
//     this.battery = this.battery + a + b;
//   },
// };

// const person4 = {
//   name: "She",
//   battery: 30,
// };

// person3.chargeBattery.apply(person4, [30, 30]);
// console.log(person3);
// console.log(person4);

//bind - call and apply invokes fun imediately  but bind return a fun which we invoked later in the code
// const person3 = {
//   name: "He",
//   battery: 27,
//   chargeBattery: function (a, b) {
//     this.battery = this.battery + a + b;
//   },
// };

// const person4 = {
//   name: "She",
//   battery: 30,
// };

// let chargeBatteryOfPerson4 = person3.chargeBattery.bind(person4, 30, 30);

// chargeBatteryOfPerson4();
// console.log(person4);

// promise
//1 - way to handle asynchronous operations
// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false;
//   if (isBoarded) {
//     resolve("You are not in the flight");
//   } else {
//     reject("Sorry you're not board");
//   }
// });

// ticket
//   .then((data) => {
//     console.log("Yessssss -", data);
//   })
//   .catch((data) => {
//     console.log("Reject -", data);
//   });

//using setTimeout
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 3000);
  });
}
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍪";
      resolve(dough);
    }, 3000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 3000);
  });
}

getCheese()
  .then((cheese) => {
    console.log("here is the cheese", cheese);
    return makeDough(cheese);
  })
  .then((dough) => {
    console.log("here is the dough", dough);
    return bakePizza(dough);
  })
  .then((pizza) => {
    console.log("here is the pizza", pizza);
  })

  .catch((data) => {
    console.log("error occured", data);
  });
