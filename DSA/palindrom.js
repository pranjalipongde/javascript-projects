// palindrome number
// an integer is an palindrom when it reads same from forward and backward.
// input : x = 121 ----->>>> output : true
// input : y = 20  ----->>>> output > false

const isPalindrome = function (x) {
  // + operator simply comvert the string into a number
  // return x === +x.toString().split("").reverse().join("");

  // optimised solution
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const result = isPalindrome(233);
console.log(result);

// 121  --->>{toString} - "121" --->>{split} -["1", "2", "1"] --->>{reverse} ["1", "2", "1"] --->>{join} 121
