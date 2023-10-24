// Two sum

// Input: nums = [2,7,11,15], target = 9 {2+7}
// Output: [0,1] - position i.e index
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// brute force solution

// const twoSum = function (nums, target) {
//   // 1st loop for the starting num  to start from
//   for (let i = 0; i < nums.length; i++) {
//     //   starts from 2nd num
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// [3,2,4] = 3+2, 3+4, 2+4 => 6, 7, 6

// using js objects

const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15]), 26);

// nums = [2,7,11,15], target = 9
