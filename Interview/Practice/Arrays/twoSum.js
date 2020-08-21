// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
  let numIndex = {}
  let result = []
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    console.log(num)
    let complement = target - num
    console.log(complement)
    if (numIndex[complement] !== undefined) {
      result[0] = numIndex[complement]
      result[1] = i
      return result
    }
    numIndex[num] = i
  }

  return result
}

console.log(twoSum([11, 2, 7, 15], 9))