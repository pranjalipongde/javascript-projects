// fibonacci number
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377....
// F(0) = 0, F(1) = 1
// F(n) = F(n-1)+F(n-2), for n > 1

// input n= 3 --->> output : 2

// var fibo = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };

// fibo(7);

// using recursion -  function which calls itself repeatedly
const fibo = function (n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(10));
// n=3 = > fibo(3-1)+fibo(3-2) => fibo(2)+fibo(1) => 1+1 = 2
// fibo(2) = 1 + 0 = 1
