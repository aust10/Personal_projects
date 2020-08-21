// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function (nums) {
  let item = {}
  for (let num of nums) {
    if (item[num]) {
      item[num]++
    } else {
      item[num] = 1
    }
  }
  for (let num of nums) {
    if (item[num] === 1) {
      return num
    }
  }
}

console.log(singleNumber([4, 1, 2, 1, 2]))
