// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

var firstUniqChar = function (s) {
  const char = {}
  for (let i = 0; i < s.length; i++) {
    if (char[s[i]]) {
      char[s[i]] += 1
    } else {
      char[s[i]] = 1
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (char[s[j]] === 1) {
      return j
    }
  }
  // this is because the question states if it does have a unique char return -1 
  return -1
}

console.log(firstUniqChar('loveleetcode'))
