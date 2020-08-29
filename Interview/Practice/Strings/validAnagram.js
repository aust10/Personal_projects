// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?


var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const reg = {}
  for (let i = 0; i < s.length; i++) {
    if (reg[s[i]]) {
      reg[s[i]] += 1
    } else {
      reg[s[i]] = 1
    }
  }
  console.log(reg)
  for (let j = 0; j < t.length; j++) {
    if (!reg[t[j]]) return false
    reg[t[j]] -= 1
    if (reg[t[j]] < 0) return false
  }
  return true
}

console.log(isAnagram('ab', 'a'))
