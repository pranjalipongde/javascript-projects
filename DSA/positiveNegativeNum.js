//  Write a program that takes as input an array of positive and negative numbers (0 excluded). The objective is to
// return those items from the array whose sum is 0. If no such items exist return “No Elements found”
// Example: For an input array [-4, 1, 3, -2, -1],
// one of the possible results would be 3, -2, -1 since their sum is 0.

function findItemsWithSumZero(arr) {
  const sums = {};

  for (let i = 0; i < arr.length; i++) {
    // checks if current eleement is present already in object
    if (arr[i] in sums) {
      // if present
      return arr.slice(sums[arr[i]] + 1, i + 1);
    } else {
      // if not present
      sums[-arr[i]] = i;
    }
  }
  // idf no element found
  return "No element found";
}

console.log(findItemsWithSumZero([-4, 1, 3, -2, -1]));
