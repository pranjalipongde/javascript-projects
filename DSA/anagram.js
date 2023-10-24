// anagram
// anagram is a word of phrase formed by rearranging the letters of different word.
//input: (s="anagram"), (t="nagaram") --->>> output: true;

// 1st approach
// const isAnagram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");

// return s.split("").sort().join("") === t.split("").sort().join("") ;

//   return s === t;
// };

// isAnagram("anagram", "nagaram");

// anagram = [a, n, a, g,r,a,m] => [a,a,a,g,m,r] ==>aaagmr

// nagaram = [n,a,g,a,r,a,m] => [a,a,a,g,m,r] ==> aaagmr

// 2nd approach
const isAnagram = function (s, t) {
  // if length is not same then return false(not anagram)
  if (s.length !== t.length) return false;

  let obj1 = {}; // { "a": 3, "n": 1, "g": 1, "r": 1, "m": 1 }
  let obj2 = {}; // { "n": 2, "a": 2, "g": 1, "r": 1, "m": 1 }

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  // i=0 , s[i] = "a", t[i] = "n".
  //a nd n does not exits so it bcoms👇
  //obj1["a"] = 0 + 1 = 1.
  //obj2["n"] = 0 + 1 = 1

  //i=1, s[i] = "n", t[i] = "a"
  //obj2["n"] = 0 + 1 = 1
  //obj2["a"] = 0 + 1 = 1

  // i = 2, s[i] = "a", t[i] = "g"
  //obj1["a"] = 1 + 1 = 2
  //obj1["g"] = 0 + 1 = 1

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagram"));
