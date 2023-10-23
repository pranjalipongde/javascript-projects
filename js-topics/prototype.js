// const obj = new Object({
//   name: "Pranjali",
// });

const obj = {
  name: "Pranju",
  getName: function () {
    return this.name;
  },
};
console.log(obj);

const obj2 = {
  roll: 1,
  __proto__: obj, //accessing the property of obj
};

console.log(obj2.getName());
