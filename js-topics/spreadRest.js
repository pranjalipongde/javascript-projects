// spread and rest operator

// spread operator - used to spread an elements of an array or objects into one an another array or object.
// const num1 = [1, 2, 3];
// const num2 = [...num1, 4, 5, 6];
// console.log(num2);

// object
// const person = {
//   name: "john",
// };

// const newPerson = {
//   ...person,
//   age: 32,
// };
// console.log(newPerson);

//copy array using spread
const arr1 = ['one', 'two', 'three'];
const arr2 = [...arr1, 'four', 'five'];
console.log(arr2);


//rest oprator - used to pass an any number off arguments into the function . which can be accessed inside the function .

function sum(...a) {
  let sum = 0;
  for (let i of a) {
    sum += i;
  }
  return sum;
}
console.log(sum(3,4,5,6,7,8,9));
