// merge two string
// input1 : 'abc'   + input2 : "def" ---->>> adbecf

function mergeTwoString(s1, s2) {
  let result = "";

  // for each index of strings
  for (let i = 0; i < s1.length || i < s2.length; i++) {
    // 1st choose ith char of the 1st string if it exists
    if (i < s1.length) {
      result += s1.charAt(i);
    }

    // choose ith char of the 2nd string if it exists
    if (i < s2.length) {
      result += s2.charAt(i);
    }
  }
  return result;
}

let s1 = "good";
let s2 = "bad";
console.log(mergeTwoString(s1, s2));
