//remove duplicates from array

//using new set()
// const numbers = [1, 10, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8];
// const unique = [...new Set(numbers)];
// console.log(unique);

//using filter
const num = [1, 5, 5, 3, 4, 5, 6, 7, 7, 7, 8];
const newone = num.filter((item, index) => num.indexOf(item) === index);
console.log(newone);

//using reduce
const n = [1, 1, 1, 2, 2, 3, 12, 23, 12, 12, 23, 45, 456];
const u = n.reduce(
  (curr, item) => (curr.includes(item) ? curr : [...curr, item]),
  []
);
console.log(u);
