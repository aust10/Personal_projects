// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function (nums) {
  nums.sort()
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i - 1]
    if (current === nums[i]) {
      return true
    }
  }
  return false
}

console.log(containsDuplicate([1,2,4,65]))
