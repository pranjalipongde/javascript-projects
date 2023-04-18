// palindrome number
// an integer is an palindrom when it reads same from forward and backward.
// input : x = 121 ----->>>> output : true
// input : y = 20  ----->>>> output > false

const isPalindrome = function (x) {

  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};
const result = isPalindrome(121);
console.log(result);

// 121  --->> "121" --->> ["1", "2", "1"] --->> ["1", "2", "1"] --->> 121