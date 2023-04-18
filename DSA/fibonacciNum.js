// fibonacci number
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377....
// F(0) = 0, F(1) = 1
// F(n) = F(n-1)+F(n-2), for n > 1

// input n= 3 --->> output : 2
var fibo = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

fibo(7);
